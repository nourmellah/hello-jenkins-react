pipeline {
  agent any

  options {
    timestamps()
    skipDefaultCheckout(true)
  }

  environment {
    CI = "true"
  }

  stages {
    stage("Checkout") {
      steps {
        checkout scm
      }
    }

    stage("Install") {
      steps {
        sh "npm ci"
      }
    }

    stage("Lint") {
      steps {
        sh "npm run lint"
      }
    }

    stage("Test") {
      steps {
        sh "npm test"
      }
    }

    stage("Build") {
      steps {
        sh "npm run build"
      }
    }

    stage("Archive dist") {
      steps {
        archiveArtifacts artifacts: "dist/**", fingerprint: true
      }
    }
  }

  post {
    always {
      deleteDir()
    }
  }
}
