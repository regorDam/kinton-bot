const colors = require('colors');

module.exports = {
  log(log) {
    console.log(log);
  },
  error(log) {
    console.log(colors.red(log));
  },
  warning(log) {
    console.log(colors.yellow(log));
  },
  success(log) {
    console.log(`✔ ${colors.green(log)}`);
  },
  sendError(message,log) {
    var msg = "```diff\n"+log+"\n```";
    message.channel.send(msg);
  },
  sendWarning(message,log) {
    var msg = "```fix\n"+log+"\n```";
    message.channel.send(msg);
  },  
  
  /*
```ini
[Here's some blue highlighted text]
```
  */
  send(message,log) {
    message.channel.send(log);
  },
  sendCode(message,log) {
    
    var text =  log.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '')
    if(text.length > 2000){
      
      var l = text.split("\n");
      var length = l.length;
      var mid = l.length/2;
      
      var output ="";
      for (var x = 0; x < mid; x++) {
        if(!l[x].startsWith("/home"))
          output += l[x]+"\n";
      }
      message.channel.send(output, {code:true});
      
      var intmid = Math.trunc( mid );

      output ="";
      for (var x = intmid; x < length; x++) {
        output += l[x]+"\n";
      }      
      message.channel.send(output, {code:true});
      
    }
    else
      message.channel.send(text, {code:true});
  },
  title(title) {
    const length = title.length;
    const lineLength = Math.floor((30 - (length + 2)) / 2);

    console.log('');
    console.log(`═> ${colors.yellow(title)}`);
    console.log('');

  },
  splashScreen() {
    console.log(colors.magenta('═══════════════════════════════════════════════════════════════════'));
    console.log(colors.cyan('                       ───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───'));
    console.log(colors.cyan('                       ───█▒▒░░░░░░░░░▒▒█───'));
    console.log(colors.cyan('                       ────█░░█░░░░░█░░█────'));
    console.log(colors.cyan('                       ─▄▄──█░░░▀█▀░░░█──▄▄─'));
    console.log(colors.cyan('                       █░░█─▀▄░░░░░░░▄▀─█░░█'));
    console.log(colors.cyan('                       █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█'));
    console.log(colors.cyan('                       █░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█'));
    console.log(colors.cyan('                       █░░║║║╠─║─║─║║║║║╠─░░█'));
    console.log(colors.cyan('                       █░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█'));
    console.log(colors.cyan('                       █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█'));
    console.log(colors.cyan(''));
    console.log(colors.cyan('##    ##  ######      ######      ###    ##     ## ########  ######  '));
    console.log(colors.cyan('##   ##  ##    ##    ##    ##    ## ##   ###   ### ##       ##    ## '));
    console.log(colors.cyan('##  ##   ##          ##         ##   ##  #### #### ##       ##    '));
    console.log(colors.cyan('#####    ##          ##   #### ##     ## ## ### ## ######    ######  '));
    console.log(colors.cyan('##  ##   ##          ##    ##  ######### ##     ## ##             ## '));
    console.log(colors.cyan('##   ##  ##    ##    ##    ##  ##     ## ##     ## ##       ##    ## '));
    console.log(colors.cyan('##    ##  ######      ######   ##     ## ##     ## ########  ######  '));
    console.log('');
    console.log(colors.magenta('═══════════════════════════════════════════════════════════════════'));
    console.log(colors.white('version:'), colors.blue('alpha 1.0'));
    console.log(colors.white('author:'), colors.blue('KintonCloud'));
    console.log(colors.magenta('═══════════════════════════════════════════════════════════════════'));
    console.log('');
  }
};