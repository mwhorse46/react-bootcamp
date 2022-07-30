// const fakeData = [...courseInfo];

// const shuffle = a => {
//     for (let i = a.length; i; i--) {
//         let j = Math.floor(Math.random() * i);
//         [a[i - 1], a[j]] = [a[j], a[i - 1]];
//     }
// }

// shuffle(fakeData);

// export default fakeData;




const shuffle = (quiz) => {

    const answers = [quiz.correct_answer, ...quiz.incorrect_answers];
    for (let i = answers.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [answers[i - 1], answers[j]] = [answers[j], answers[i - 1]];
    }

    return answers;
}

export default shuffle;




















