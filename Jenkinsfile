pipeline {
    agent any

    tools {
        nodejs "node20"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Test') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build & Generate') {
            steps {
                sh 'npm run generate'
            }
        }

        stage('Build Image Docker') {
            steps {
                sh 'docker build . -t sakravuth/sambot-digital:latest'
            }
        }
        
    }
}
