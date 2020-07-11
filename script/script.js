
function showDevSkills() {
    let v = document.getElementById("dev");
    let s = document.getElementById("dis");
    v.classList.add("disabled");
    s.classList.remove("disabled");

    document.querySelector(".img_text_l").style.borderLeft = "5px solid rgb(207, 206, 206)";
    document.querySelector(".img_text_r").style.borderLeft = "5px solid #7F8991";

    const div = document.createElement('div');

    div.className = 'tools';

    div.innerHTML = `
    <a name="skills"></a>
            <h1 class="title"> SKILLS </h1>
            <div class="margin-btm-10">
                <span class="skill-title">HTML/CSS</span>
                <div class="bar">
                    <div class="bar-color skl-90">
                    </div>
                </div>
            </div>
            <div class="margin-btm-10">
                <span class="skill-title">JavaScript</span>
                <div class="bar">
                    <div class="bar-color skl-80">
                    </div>
                </div>
            </div>
            <div class="margin-btm-10">
                <span class="skill-title">Python</span>
                <div class="bar">
                    <div class="bar-color skl-60">
                    </div>
                </div>
            </div>
            <div class="margin-btm-10">
                <span class="skill-title">C</span>
                <div class="bar">
                    <div class="bar-color skl-50">
                    </div>

                </div>
            </div>

    `;

    while (document.getElementById('list').firstChild) {
        document.getElementById('list').removeChild(document.getElementById('list').firstChild);
    }

    document.getElementById('list').appendChild(div);

}
function showDisSkills() {
    let v = document.getElementById("dev");
    let s = document.getElementById("dis");
    s.classList.add("disabled");
    v.classList.remove("disabled");
    document.querySelector(".img_text_r").style.borderLeft = "5px solid rgb(207, 206, 206)";
    document.querySelector(".img_text_l").style.borderLeft = "5px solid #7F8991";

    const div = document.createElement('div');

    div.className = 'tools';

    div.innerHTML = `
    <a name="skills"></a>
            <h1 class="title"> SKILLS </h1>
            <div class="margin-btm-10">
                <span class="skill-title">Figma</span>
                <div class="bar">
                    <div class="bar-color skl-90">
                    </div>
                </div>
            </div>
            <div class="margin-btm-10">
                <span class="skill-title">CSS</span>
                <div class="bar">
                    <div class="bar-color skl-80">
                    </div>
                </div>
            </div>
            <div class="margin-btm-10">
            <span class="skill-title">Illustrator</span>
            <div class="bar">
                <div class="bar-color skl-60">
                </div>
            </div>
        </div>
        <div class="margin-btm-10">
            <span class="skill-title">Photoshop</span>
                <div class="bar">
                    <div class="bar-color skl-50">
                    </div>

                </div>
            </div>
            <div class="margin-btm-10">
                <span class="skill-title">Sketches</span>
                <div class="bar">
                    <div class="bar-color skl-50">
                    </div>

                </div>
            </div>


    `;

    while (document.getElementById('list').firstChild) {
        document.getElementById('list').removeChild(document.getElementById('list').firstChild);
    }

    document.getElementById('list').appendChild(div);

}


