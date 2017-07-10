   function loadContact() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                    var contacts = JSON.parse(this.responseText);
                    var contactsDiv = document.getElementById("contacts");
                    console.log(contact);
                    for(var i=0; i<contacts.length; i++){
                        var contact =  contacts[i];
                        console.log(contact);

                        var contactDiv = document.createElement("div");
                        var nameDiv = document.createElement("div");
                        var nameText = document.createTextNode(contact.firstname + " " + contact.lastname);
                        nameDiv.appendChild(nameText);
                        contactDiv.appendChild(nameDiv);


                        var addressDiv = document.createElement("div");
                        var addressText = document.createTextNode(contact.address);
                        addressDiv.appendChild(addressText);
                        contactDiv.appendChild(addressDiv);

                        var emailDiv = document.createElement("div");
                        var emailText = document.createTextNode(contact.email);
                        emailDiv.appendChild(emailText);
                        contactDiv.appendChild(emailDiv);

                        var phoneDiv = document.createElement("div");
                        var phoneText = document.createTextNode("Ph:" + contact.phone);
                        phoneDiv.appendChild(phoneText);
                        contactDiv.appendChild(phoneDiv);
                        
                        contactsDiv.appendChild(contactDiv);
                    }
                }
            };
            xhttp.open("GET", "http://saracr.com/addressbookservice/webapi/4/contact", true);
            xhttp.send();
        }