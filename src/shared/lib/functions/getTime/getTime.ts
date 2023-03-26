export const getTime = (date: string): string => {
    const Data = new Date(date)
    const Year = Data.getFullYear()
    const Month = Data.getMonth()
    const Day = Data.getDate()

    let fMonth = ''

    switch (Month) {
        case 0:
            fMonth = 'января'
            break
        case 1:
            fMonth = 'февраля'
            break
        case 2:
            fMonth = 'марта'
            break
        case 3:
            fMonth = 'апреля'
            break
        case 4:
            fMonth = 'мае'
            break
        case 5:
            fMonth = 'июня'
            break
        case 6:
            fMonth = 'июля'
            break
        case 7:
            fMonth = 'августа'
            break
        case 8:
            fMonth = 'сентября'
            break
        case 9:
            fMonth = 'октября'
            break
        case 10:
            fMonth = 'ноября'
            break
        case 11:
            fMonth = 'декабря'
            break
    }

    return Day + ' ' + fMonth + ' ' + Year
}
