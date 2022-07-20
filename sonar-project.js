const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://ec2-54.177.50.205.compute-1.amazonaws.com:9000',
       options : {
       'sonar.sources': '.',
       'sonar.inclusions' : './**' // Entry point of your code
       }
     }, () => {});
 
