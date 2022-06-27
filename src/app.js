import { LightningElement,track,api,wire } from "lwc";
//import getAccountDataToExport from '@salesforce/apex/Apex_COM_MoushikomikokyakuOld.getAccountDataToExport';

export default class App extends LightningElement {
  // title = "Welcome to Lightning Web Components!";
  myVal = '<b>Hello!</b>';
  // todayDate = Date.now();
 ////////////////////////////////////////   
    // @track conatctData = {}

    // columnHeader = ['Id','Name','CustomerCode__c','RegisterDate__c','CmapOption_laterconfirmed__c']

    // @wire(getAccountDataToExport)
    // wiredData({ error, data }) {
    //     if (data) {
    //         console.log('Data', data);
    //         this.conatctData = data;
    //     } else if (error) {
    //         console.error('Error:', error);
    //     }
    // }  
   

  showFeatures = true;
  value = ['option1'];

    get options() {
        return [
            { label: 'Ross', value: 'option1' },
            { label: 'Rachel', value: 'option2' },
            { label: 'Rachel', value: 'option3' },
        ];
    }
    handleChange(e) {
        this.value = e.detail.value;
    }
    handleChange1(event) {
        this.myVal = event.target.value;
    }
    
    handcsv = () => {
    const req = new XMLHttpRequest();
    req.open('POST', url, true);
    req.responseType = 'blob';
    req.setRequestHeader('Content-Type', 'application/json');
    req.onload = () => {
      const data = req.response;
      const a = document.createElement('a');
      const blob = new Blob([data],{type:"application/octet-stream"});
      const blobUrl = window.URL.createObjectURL(blob);
      this.download(blobUrl) ;
    };
    req.send('');
  };
 
    download = (blobUrl) => {
    const a = document.createElement('a');
    a.style.display = 'none';
    a.download = 'xxx.xls'; //文件名
    a.href = blobUrl;
    a.click();
    // document.body.removeChild(a);
    }

/////////////////////////////////////////

    // exportContactData(){
    //     // Prepare a html table
    //     let doc = '<table>';
    //     // Add styles for the table
    //     doc += '<style>';
    //     doc += 'table, th, td {';
    //     doc += '    border: 1px solid black;';
    //     doc += '    border-collapse: collapse;';
    //     doc += '}';          
    //     doc += '</style>';
    //     // Add all the Table Headers
    //     doc += '<tr>';
    //     this.columnHeader.forEach(element => {            
    //         doc += '<th>'+ element +'</th>'           
    //     });
    //     doc += '</tr>';
    //     // Add the data rows
    //     this.conatctData.forEach(record => {
    //         doc += '<tr>';
    //         doc += '<th>'+record.Id+'</th>'; 
    //         doc += '<th>'+record.Name+'</th>'; 
    //         doc += '<th>'+record.CustomerCode__c+'</th>';
    //         doc += '<th>'+record.RegisterDate__c+'</th>'; 
    //         doc += '<th>'+record.CmapOption_laterconfirmed__c+'</th>'; 
            
    //         doc += '</tr>';
    //     });
    //     doc += '</table>';
    //     var element = 'data:application/vnd.ms-excel,' + encodeURIComponent(doc);
    //     let downloadElement = document.createElement('a');
    //     downloadElement.href = element;
    //     downloadElement.target = '_self';
    //     // use .csv as extension on below line if you want to export data as csv
    //     downloadElement.download = 'Contact Data.xls';
    //     document.body.appendChild(downloadElement);
    //     downloadElement.click();
    // }
    // only 20
  
}











	// </div>
	// 			 <div class="slds-box slds-theme--default">
    //     Click on the link Below to Export data as csv/xls.
    //     <p class="slds-m-top--large">
    //         <!-- <a onclick={exportContactData}>Export Contact Data</a> -->
    //         <lightning-button variant="brand" label="Export Contact data" title="Export Contact Data" onclick={exportContactData}></lightning-button></p>
