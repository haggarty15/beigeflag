const flags = [
    "You have a spreadsheet for your daily routine.",
    "You reorganize your bookshelf every week just for fun.",
    "You always arrive exactly five minutes early.",
    "You keep a detailed log of your household chores.",
    "You plan vacations around local grocery stores.",
    "You color-code your closet by season and hue.",
    "You set multiple alarms even though you always wake up before the first one.",
    "You carry a notebook to keep track of interesting license plates.",
    "You schedule your streaming binges like work meetings.",
    "You enjoy rearranging furniture more than sitting on it."
];

document.getElementById('flag-btn').addEventListener('click', () => {
    const flagDisplay = document.getElementById('flag-display');
    const randomFlag = flags[Math.floor(Math.random() * flags.length)];
    flagDisplay.textContent = randomFlag;
});