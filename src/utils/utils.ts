export function getExperienceYears(startYear: number, startMonth: number): number {
    const startDate = new Date(startYear, startMonth);
    const today = new Date();
    return Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25));
}