import holidays from "./holidays.js";
export default function holidayChecker(){

    const day = new Date();
    const today = day.toLocaleDateString('en-US');
    const holidayToday = holidays.filter(date => date.date === today)
    
    if (holidayToday.length !== 0) {
        return `Sim, hoje é ${holidayToday[0].name}`
    } else {
        return "Não, hoje não é feriado"
    }
}