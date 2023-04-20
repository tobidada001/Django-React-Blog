export default function formatdate(date_val){
    const mydate = new Date(date_val)
    const formatDate = mydate.toLocaleDateString("en-US",{
        month: "short",
        day: "numeric",
        year: "numeric",
        hour12: true,
        hour: "numeric",
        minute: "numeric"
    })

    return formatDate
}