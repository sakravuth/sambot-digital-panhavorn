pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Test') {
            steps {
                sh 'sudo apt update'       // Update package index
                sh 'sudo apt install npm'  // Install npm
                sh 'npm install'           // Install dependencies
            }
        }

        stage('Build') {
            steps {
                sh 'npm run generate' // Build your project
            }
        }
    }
}
