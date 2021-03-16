import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "2.4.3"
	id("io.spring.dependency-management") version "1.0.11.RELEASE"
	kotlin("jvm") version "1.4.30"
	kotlin("plugin.spring") version "1.4.30"
}

group = "com.angular"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_11
val webAppDir = "$projectDir/angular-full-stack-tech"
val distFolder = "$webAppDir/dist/angular-full-stack-tech"
val destFolder = "$projectDir/src/main/resources/static"

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
}

tasks.getByName("processResources"){
	dependsOn("buildAngular")
	dependsOn("copyAngularClient")
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "11"
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}

tasks.register<Exec>("buildAngular") {
	dependsOn("installAngular")
	workingDir(webAppDir)
	inputs.dir(webAppDir)
	// Add task to the standard build group
	group = BasePlugin.BUILD_GROUP
	commandLine("ng", "build")

}

tasks.register<Exec>("installAngular") {
	workingDir (webAppDir)
	inputs.dir(webAppDir)
	// Add task to the standard build group
	group = BasePlugin.BUILD_GROUP
	commandLine("npm", "install")
}

tasks.register<Copy>("copyAngularClient") {
	println("Copying files from $distFolder to $destFolder")
	from (distFolder)
	into (destFolder)
}
