class Whoami {
    constructor() {
        this.name = 'whoami';
        this.docs = 'this command reveals your ip address and some of the devices details';
        //Fetch all the required data while construction
        this.ip4 = $.ajax({url: 'https://api.ipify.org?format=json'});
    }
    result(input) {
        //can ask questions from the users
        //var answr = await ask('dsds :');
        return `IPv4 : ${this.ip4.responseJSON.ip}\nPlatform Using : ${navigator.userAgentData.platform}\nBrowser : ${(navigator.userAgentData.platform === 'Android') ? navigator.userAgentData.brands[0].brand:navigator.userAgentData.brands[2].brand} Version ${(navigator.userAgentData.platform === 'Android') ? navigator.userAgentData.brands[0].version:navigator.userAgentData.brands[2].version}`;
    }
}

class Clear {
    constructor() {
        this.name = 'clear';
        this.docs = 'this command clears the terminal.';
    }
    result(input) {
        $('#output').text('');
        console.clear();
        $('#intro').text('');
        return 0;
    }
    help(input) {
        $('#output').text('');
        console.clear();
        $('#intro').text('');
        return "It's pretty much clear, I think\n";
    }
}
class Help {
    constructor() {
        this.name = 'help';
        this.docs = 'This command explains every existing command in the Terminal.';
    }
    result(input) {
        let counter = 1;
        let result = 'These are the existing commands and their description:\n';
        for (let i in commands) {
            result += `\n${counter}. '${commands[i].name}' \n${commands[i].docs}\n`;
            counter++;
        }
        result += '\nAlso you can write expressions like in 2+2 or 2==2, or 194567*23323/2343+(65565-5566)\nYou can also access the local variables like "intro" for introduction lines etc.';
        return result;
    }
    help(input) {
        return "Please don't overthink!\n";
    }
}

class Exit{
    constructor() {
        this.name = 'exit';
        this.docs = "This command exits the terminal and redirects you to TheHackerClown's github page";
    }
    result(input) {
        window.location.replace('https://github.com/TheHackerClown')
        return 'Thanks you for using me :})';
    }
    help(input) {
        return 'Exits to the source code of Hackster.\n';
    }
}

class ListFiles {
    constructor() {
        this.name = 'ls';
        this.docs = 'This command lists all the existing files in the repository,[just like linux]\nbut it also describes the file functions';
    }
    result(input) {
        return 'The Existing files in this repository are:\n\n1. init.js \nThis File initializes the main logic of the terminal and other basic functions\nlike the intro typewriter effect, write function, ask function etc\n\n2. utils.js \nThis files contains the pre-made commands by the author TheHackerClown.\n\n3. commands_list.js \nIt is a middleman between the init.js and utils.js files, as\nIt initializes all the commands before making them usable.\n\n4. index.html\nIt creates the basic skeleton of the terminal.\n\n5. style.css\nIt initializes the terminal effect.';
    }
    help(input) {
        return "It returns all the files made by TheHackerClown\n";
    }
}

class Fullscreen {
    constructor () {
        this.name = 'fullscreen';
        this.docs = 'This command makes the terminal fullscreen or exits the fullscreen';
    }
    result(input){
        if (input[1] === 'exit') {
            try {
                var event = document.exitFullscreen().catch((error)=>{
                    console.log(error);
                });
                return 0;
            } catch(error) {
                console.log(error);
                return 'Error: Terminal is not on Fullscreen';
            }
        } else {
            document.body.requestFullscreen();
            return 0;
        }
    }
    help(input) {
        if (input.includes('exit')) {
            return 'This commands dispatchs an event to exit Fullscreen.';
        } else if (input.includes('fullscreen') && input.length == 2) {
            return 'This commands dispatchs an event to enter in Fullscreen Mode.';
        }
    }
}