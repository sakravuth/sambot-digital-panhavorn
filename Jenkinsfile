pipeline {
    agent {
        docker {
            image 'node:20'
        }
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run generate'
            }
        }
    }
}
