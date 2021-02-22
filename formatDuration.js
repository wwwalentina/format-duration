const formatDuration = (input) => {  
     
    if(input == 0)
    return console.log('Now'); 

    let years = ~~(input / 31536000);
    let days = ~~((input % 31536000) / 86400);
    let hours = ~~((input % 86400) / 3600);
    let minutes = ~~((input % 3600) / 60);
    let leftSeconds = input % 60;
    let output = ''; 
    
    output += years > 0 ? (years == 1 ? years + '-year ' : years + '-years ') : '';
    output += days > 0 ? (days == 1 ? days + '-day ' : days + '-days ') : '';
    output += hours > 0 ? (hours == 1 ? hours + '-hour ' : hours + '-hours ') : '';
    output += minutes > 0 ? (minutes == 1 ? minutes + '-minute ' : minutes + '-minutes ') : '';
    output += leftSeconds > 0 ? (leftSeconds == 1 ? leftSeconds + '-second ' : leftSeconds + '-seconds ') : '';
    
    let formatedOutput = output.split(' ').join(', ').slice(0, -2);     
    formatedOutputFirstPart = formatedOutput.substring(0, formatedOutput.lastIndexOf(','));
    formatedOutputSecondPart = formatedOutput.substring(formatedOutput.lastIndexOf(',') + 1, formatedOutput.length);
    if (formatedOutputFirstPart.length > 0) {
        formatedOutput = formatedOutputFirstPart.concat(' and', formatedOutputSecondPart).split('-').join(' ');
    } else {
        formatedOutput = formatedOutputFirstPart.concat('', formatedOutputSecondPart).split('-').join(' ');
    }
    
    console.log(formatedOutput);        
};


module.exports = formatDuration;
