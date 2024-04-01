export const formatCurrency = (currValue: any) => {
     if (currValue) {
        return "$" + currValue
     } else return "-"
}