document.getElementById('1').addEventListener('click', CCClicked);
document.getElementById('2').addEventListener('click', testing);















function testing() {
    document.querySelector(".calc-body").innerHTML = "<div>test</div>"
}




// -----  Cutting Coils functions: -----

function CCClicked() {
    document.querySelector(".calc-body").innerHTML= '<h2>Cutting coils at entry</h2><p>Calculate the length of strip to be removed from a black coil at entry before stopping to cut out damage / pickleline welds.<br>Enter in the complete diameter from bottom to top in mm (eg 1850) and do the same for the complete diameter of the PLW / damage.<br>Enter the gauge as per the business system (eg 0.40) and press calculate.<br>Enter the resulting meters into the allen-bradley and the warning bell should sound with 100 meters to go. (I hope ;)</p><p>To get the length of a black coil, simply enter the bore size (508) as diameter "B"</p><h3><b>Choose either diameter or radius:</b></h4><div class="choose-grid"><div class="cc-choice"><img src="https://previews.dropbox.com/p/thumb/AB_eeQSmEmPndk0K_VT45lx4B-zUYxonFIoX5XI9v2fG3MU6g8zd_dRpjUTV2q_EaWt0yWird2z-WbyZX0PjGurSUShftJSYGK3clOeNryyMBeFLca0ozawO_iZlgXYo_cyGhPvfZCz6A2rTXbhgslxRO4owOeF655lpS99WpONR3AuH5Ll4stm8vJ_JoS2TV4bIaYk_oR3i_BKzfj228FqU27Bq5nbXCYDvCo7F6npJDakVz9kDRsNERHONAXz0NjwuF7Jw0yrOFkPHjm7C3zVNiagHd1qbe9wXLEedTYLvigv_2Rftp8ZfQzPZnxNf4B8HuD5D2kxlCY8yakXD8-y7/p.jpeg" alt="Diameter" id="cc-img-d"><div style="text-align: center"><input type="radio" name="dorr" id="cc-radio-d" checked><label for="cc-radio-d">Diameter</label></div></div><div class="cc-choice"><img src="https://previews.dropbox.com/p/thumb/AB-sMHFzmjvJH_ACfhapBez-Co8qfkmm3jvv0JPrcRoAeQMSHjnsPw1Cx5VCGj0WWQmAbkfDfCpP6El_FgnK1uGuUcRccQh69usUwfAswzNQT8qV80yRfuCgvujpuAk-kInJb9OQ3LGHM2FBX_gssa2iVBHZ4qoORbH3zXKeP_7jQtTNLiPc-q0wqyLyGW5kNoHOo6v0Xt_bSGV2NzmRxWa9XBBhk4QsC3E38B_GsHD7Z9AEoG2wYHZ5z5taORQcBk2RnoyaJfBKXx2nnuZpdJKopssgfPceBVyXZPR0I0g8tpQNvwJq0uzwb7msyrwvZ23adxCU77cjLRT5VHnPJ98D/p.jpeg" alt="Radius" id="cc-img-r"><div style="text-align: center"><input type="radio" name="dorr" id="cc-radio-r"><label for="cc-radio-d">Radius</label></div></div></div><hr style="margin-top: 15px"><div class="cc-inputs"><input type="number" name="cc-inpA" id="cc-inpA"><label for="cc-inpA">Measurement A</label><br><input type="number" name="cc-inpB" id="cc-inpB"><label for="cc-inpB">Measurement B</label><br><input type="number" name="cc-inpG" id="cc-inpG"><label for="cc-inpG">Gauge</label></div><div class="cc-line"></div><button id="cc-calculate">Calculate distance to weld</button><h2 id="cc-result">Result:</h2> <button id="cc-clear">Clear boxes</button>';

    document.querySelector('#cc-img-d').addEventListener('click', CCSetRadio);
    document.querySelector('#cc-img-r').addEventListener('click', CCSetRadio);
    document.querySelector('#cc-calculate').addEventListener('click', CCCalculate);
    document.querySelector('#cc-clear').addEventListener('click', CCClear);
}

// Allow image clicks to set radio buttons
function CCSetRadio(e) {
    if(e.target.id == "cc-img-d") {
        document.querySelector("#cc-radio-d").checked = true;
    }
    else {
        document.querySelector("#cc-radio-r").checked = true;
    }
}

// Calculate distance to weld button
function CCCalculate() {
    
    if (document.querySelector("#cc-inpA").value && document.querySelector("#cc-inpB").value && document.querySelector("#cc-inpG").value) {
        if (document.querySelector("#cc-radio-d").checked == true) {
            document.querySelector("#cc-result").textContent = "Result: " + Math.round((3.14*(eval(document.querySelector("#cc-inpA").value) + eval(document.querySelector("#cc-inpB").value))/2*(eval(document.querySelector("#cc-inpA").value/2) - eval(document.querySelector("#cc-inpB").value/2))/eval(document.querySelector("#cc-inpG").value)/1000)) + "m";
        } else {
            document.querySelector("#cc-result").textContent = "Result: " + Math.round((3.14*((eval(document.querySelector("#cc-inpA").value*2)+508) + (eval(document.querySelector("#cc-inpB").value*2)+508))/2*(((eval(document.querySelector("#cc-inpA").value*2)+508)/2) - ((eval(document.querySelector("#cc-inpB").value*2)+508)/2))/eval(document.querySelector("#cc-inpG").value)/1000)) + "m";
        } 
    } else document.querySelector("#cc-result").textContent = "Result: Not all values filled.";
}

// Clear all boxes

function CCClear() {
    document.querySelector('#cc-inpA').value = "";
    document.querySelector('#cc-inpB').value = "";
    document.querySelector('#cc-inpG').value = "";
    document.querySelector("#cc-result").textContent = "Result: ";
}
