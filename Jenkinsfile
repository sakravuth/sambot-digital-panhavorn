pipeline {
    agent any

    tools {
        nodejs "node20"
        docker "docker"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Test & Build') {
            steps {
                sh 'npm install'
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
