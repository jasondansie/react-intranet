import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { utils, read } from 'xlsx';

const UploadExcel = () => {
    const [file, setFile] = useState(null);
    const [jsonData, setJsonData] = useState(null);
    const [callData, setCallData] = useState(null);
    const [columnNames, setColumnNames] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleConvert = () => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = () => {
            const data = new Uint8Array(reader.result);
            const workbook = read(data, { type: 'array' });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const json = utils.sheet_to_json(sheet, { header: 1 });
            setJsonData(json);
            separateData(json);
        };
    };

    const separateData = (data) => {
        data.forEach((element, index) => {
            if (index === 8) {
                setColumnNames(element);
            }
        });
        let newCallData = [];
  
        // Loop through the data array
        data.forEach((call, index) => {
          if (index > 7) {
            // Add the all data after row 8 which is not needed
            newCallData.push(call);
          }
        });

        setCallData(newCallData);
      
    };

    const handleSave = () => {
        const calls = {callData};
        axios.post('http://localhost:5000/uploadxlsx ', calls )
    }

    useEffect(() => {
        if (columnNames) {
            console.log('columnNames:', columnNames[0]);
        }
    }, [columnNames]);

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleConvert}>Convert to JSON</button>
            {jsonData && (
                <div>
                    <h3>columns found</h3>
                    {columnNames}

                    <button onClick={handleSave}>Save to Database</button>
                    <p>Json file content:</p>
                    <ul>
                        {jsonData.map((item, index) => (
                            <li key={index}>
                                index {index} {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UploadExcel;
