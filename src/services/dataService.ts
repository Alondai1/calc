export const initialData = {
    currAmount: 10000,
    rent: 3000,
    daysUntil: 10,
    osh: 18000,
    salary: 15700
}

export const calc = (data: any) => {
    
    return data.currAmount - data.rent - (200 * data.daysUntil) - data.osh + data.salary
}