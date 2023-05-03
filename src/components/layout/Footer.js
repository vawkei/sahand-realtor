const Footer = () => {

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const fullDate = new Date();
    console.log(fullDate);
    const month = fullDate.getMonth();
    const year = fullDate.getFullYear()
    //console.log(month);

    //const thisDate = months[month]
    //console.log(thisDate);

    const date = `${months[month]}, ${year}`
    console.log(date)
    

    return ( 
        <div className="text-center p-16 mt-16 text-xl">
            {date}            
        </div>
     );
}
 
export default Footer;