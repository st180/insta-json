import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass','./cover.css']
})
export class AppComponent {
  title = 'insta-json';
  str: string = '';
  convert(): void {

    //var csv is the CSV file with headers
      var lines=this.str.split("\n");
      console.log(lines);

      var result = [];

      // NOTE: If your columns contain commas in their values, you'll need
      // to deal with those before doing the next step
      // (you might convert them to &&& or something, then covert them back later)
      // jsfiddle showing the issue https://jsfiddle.net/
      var headers=lines[0].split(",");

      for(var i=1;i<lines.length;i++){

          var obj: {[index: string]:any} = {};
          var currentline=lines[i].split(",");

          for(var j=0;j<headers.length;j++){
              obj[headers[j]] = currentline[j];
          }

          result.push(obj);

      }
      console.log(result);

      this.str = JSON.stringify(result);
      console.log(this.str);

      document.getElementById('csvbox')!.innerHTML = this.str;
    }



  }
