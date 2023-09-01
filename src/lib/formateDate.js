const dateFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
}

export default function formateDate(date) {
    return new Date(date).toLocaleDateString('en-US', dateFormatOptions);  
}