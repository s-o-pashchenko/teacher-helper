"use strict";

const gradesArr = [];

        function getData() {
            // const amStudents = document.getElementById("students-amount").value; //under development
            const amGrades = parseInt(document.getElementById("grades-amount").value);
            tableGenerator(amGrades);
        }

        // Validating of input for grades in between 0 an 100
        function validateInput(id) {
            let inputElement = document.getElementById(id);
            let inputValue = parseInt(inputElement.value);
            let numberOfRow = id.match(/\d+/);
            let num = parseInt(numberOfRow) + 1;

            if (isNaN(inputValue) || inputValue < 0 || inputValue > 100) {
                alert("Pleae enter a number in between 0 and 100 for #" + num + ".");
                inputElement.value = ""; // Clear the input field
                document.getElementById(id).style.backgroundColor = 'white';
            } else if (inputValue < 70) {
                document.getElementById(id).style.backgroundColor = 'red';

            } else {
                document.getElementById(id).style.backgroundColor = 'green';
            }
            
        }

        function tableGenerator(grades) {
            // Get a reference to the place where we insert our grades fields
            let place = document.getElementById("grades");

            for (let i = 0; i < grades; i++) {
                // Create a lable element
                let label = document.createElement("label");
                label.setAttribute("for", `grade${i}`);
                label.innerText = `#${i + 1}`;

                // Crate an input element
                let input = document.createElement("input");
                input.setAttribute("id", `grade${i}`);
                input.setAttribute("type", "number");
                input.setAttribute("placeholder", 0);
                input.setAttribute("min", 0);
                input.setAttribute("max", 100);
                input.setAttribute("oninput", `validateInput("grade${i}")`);

                // Appending label and input to designated place in the document
                place.appendChild(label);
                place.appendChild(input);

                // Creating a line breake to separate each label and input elements
                place.appendChild(document.createElement("br"));
            }
            let button = document.createElement("button");
            button.innerText = "Calculate";
            button.setAttribute("onclick", "getGrades()");
            document.getElementById('button').appendChild(button);
        }

        // Data collection from the user input fields
        function getGrades() {
            for (let i = 0; amGrades < i; i++) {
                gradesArr.push()
            }
        }