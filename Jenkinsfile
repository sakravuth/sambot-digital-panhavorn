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
            agent {
                docker { image 'docker:latest' }
            }
            steps {
                script {
                    // Use Buildx to build the Docker image
                    sh 'docker buildx build . -t sakravuth/sambot-digital:latest --platform linux/amd64'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
