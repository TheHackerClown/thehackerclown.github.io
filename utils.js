class Whoami {
    constructor() {
        this.name = 'whoami';
        this.docs = 'this command reveals your ip address and some of the devices details';
        //Fetch all the required data while construction
        this.ip4 = $.ajax({url: 'https://api.ipify.org?format=json'});
        this.ip6 = $.ajax({url: 'https://api64.ipify.org?format=json'});
    }
    async result(input) {
        //can ask questions from the users
        //var answr = await ask('dsds :');
        return `IPv4 : ${this.ip4.responseJSON.ip}\nIPv6 : ${this.ip6.responseJSON.ip}\nPlatform Using : ${navigator.userAgentData.platform}\nBrowser : ${navigator.userAgentData.brands[0].brand} Version ${navigator.userAgentData.brands[0].version}`;
    }
}

class Clear {
    constructor() {
        this.name = 'clear';
        this.docs = 'this command clears the terminal.';
    }
    async result(input) {
        $('#output').text('');
        console.clear();
        return 'Terminal was cleared';
    }
}
class Help {
    constructor() {
        this.name = 'help';
        this.docs = 'This command explains every existing command in the Terminal.';
    }
    async result(input) {
        let counter = 1;
        let result = 'These are the existing commands and their description:\n';
        for (let i in commands) {
            result += `\n${counter}. '${commands[i].name}' \n${commands[i].docs}\n`;
            counter++;
        }
        result += '\nAlso you can write expressions like in 2+2 or 2==2, or 194567*23323/2343+(65565-5566)\nYou can create more, using the command manual given in the git';
        return result;
    }
}

class Exit{
    constructor() {
        this.name = 'exit';
        this.docs = "This command exits the terminal and redirects you to TheHackerClown's github page";
    }
    async result(input) {
        window.location.replace('https://github.com/TheHackerClown')
        return 'Thanks you for using me :})';
    }
}