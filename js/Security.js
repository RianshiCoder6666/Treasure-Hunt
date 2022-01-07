class Security {

    constructor() {

        this.access1 = createInput("").attribute("placeholder", "Code 1");
        this.access1.position(100, 90);
        this.access1.class("input");

        this.button1 = createButton('Check');
        this.button1.position(130, 130);
        this.button1.class("button");  

        this.access2 = createInput("").attribute("placeholder", "Code 2");
        this.access2.position(600, 190);
        this.access2.class("input");

        this.button2 = createButton('Check');
        this.button2.position(630, 230);
        this.button2.class("button"); 

        this.access3 = createInput("").attribute("placeholder", "Code 3");
        this.access3.position(100, 290);
        this.access3.class("input");

        this.button3 = createButton('Check');
        this.button3.position(130,330);
        this.button3.class("button"); 
    }

    display() {

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1, this.access1.value())) {

                this.button1.hide();
                this.access1.hide();
                
                win.play();
                score++;
            } else {
                lose.play();
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2, this.access2.value())){

                this.button2.hide();
                this.access2.hide();

                win.play();
                score++;
            } else {
                lose.play();
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3, this.access3.value())){
          
                this.button3.hide();
                this.access3.hide();

                win.play();
                score++;
            } else {
                lose.play();
            }
        });
    }
}