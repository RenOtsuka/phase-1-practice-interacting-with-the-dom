
let start = document.addEventListener("DOMContentLoaded", () => {

    let countTime = setInterval(incrementTime, 1000);

    let plusBtn = document.getElementById('plus');
    plusBtn.addEventListener('click', manualCount);

    let mimusBtn = document.getElementById('minus');
    mimusBtn.addEventListener('click', manualCount);

    let likeCount = document.getElementById('heart');
    likeCount.addEventListener('click', displayLike);

    let pause = document.getElementById('pause');
    pause.addEventListener('click', () => {
        if(this.pause.innerHTML === ' pause '){
            clearInterval(countTime);
            this.pause.innerHTML = ' resume ';
            plusBtn.disabled = true;
            mimusBtn.disabled = true;
            likeCount.disabled = true;
            document.getElementById('submit').disabled = true;
        }
        else{
            countTime = setInterval(incrementTime, 1000);
            this.pause.innerHTML = ' pause ';
            plusBtn.disabled = false;
            mimusBtn.disabled = false;
            likeCount.disabled = false;
            document.getElementById('submit').disabled = false;
        }
    });

    let commentForm = document.getElementById('comment-form').addEventListener('submit', (e) => {
        e.preventDefault();
        let inputComment = e.target.querySelector('#comment-input').value;
        let comment = document.createElement('p');
        comment.textContent = `${inputComment}`;
        document.querySelector('#list').appendChild(comment);
    });

});


function incrementTime(){
    let timer = document.querySelector('#counter');
    let strToNum = parseInt(timer.textContent, 10);
    strToNum++;
    timer.textContent = `${strToNum.toString()}`;
    //console.log(strToNum);
}

function manualCount(){
    let btn = this;
    //console.log(btn);

    if(btn.id === 'plus'){
        incrementTime();
    }
    else{
        let timer = document.querySelector('#counter');
        let strToNum = parseInt(timer.textContent, 10);
        strToNum--;
        timer.textContent = `${strToNum.toString()}`;
    }
}

function displayLike(){
    let likeCounter = 0;
    let like = document.querySelector('.likes');
    let counter = document.querySelector('#counter');

    let newLike = document.createElement('li');
    newLike.setAttribute('data-num', `${counter.textContent}`);
    newLike.innerHTML = `${counter.textContent} has been liked <span>${++likeCounter}</span> time(s)`;
    like.appendChild(newLike);


}
