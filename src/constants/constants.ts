export const appColors = {
    primary: "#666873",
    black: "#000000",
    hover: "#989cb2",
    white: "#ffffff",
    text: "#c7cad6",
    card: "#dfe0e3",
    red:"#C70039"
}

export const getDateDifference = (startDate: Date, endDate: Date) => {
    if (startDate > endDate) {
        throw new Error("startDate must be before endDate");
    }
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();
    let monthDifference = (endYear - startYear) * 12 + (endMonth - startMonth);
    const years = Math.floor(monthDifference / 12);
    const months = monthDifference % 12;

    return {years, months};
}
