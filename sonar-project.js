const sonarqubeScanner = require('sonar');
     sonarqubeScanner({
       serverUrl: 'http://ec2-54.241.187.91.compute-1.amazonaws.com:9000',
       options : {
       'sonar.sources': '.',
       'sonar.inclusions' : './**' // Entry point of your code
       }
     }, () => {});
 
