import React, {useEffect, useState} from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

interface Data {

    id: number;
    date: string
    importance: string;
    equipment: string;
    message: string;
    responsible: string;
}

export const Table = () => {

    let newDate = new Date()
    let seconds = newDate.getSeconds();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const [data, setData] = useState<Data[]>([
        {
            id: 1,
            date: "18.4.2024 16:29:49",
            importance: "высокая",
            equipment: "вегас",
            message: "сервер Vegas доступен",
            responsible: "Смирнов В. А."
        }
    ])
    const [globalFilter, setGlobalFilter] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedRow, setSelectedRow] = useState<any | null>(null);

    const handleKeyDown = (event: React.KeyboardEvent, rowData: Data) => {
        if (event.key === ' ') {
            const isSelected = selectedRows.includes(rowData.id);
            if (isSelected) {
                setSelectedRows(selectedRows.filter((id) => id !== rowData.id));
            } else {
                setSelectedRows([...selectedRows, rowData.id]);
            }
        }
    };

    const rowClassName = (rowData: Data) => {
        return {
            'read-it': selectedRows.includes(rowData.id)
        };
    };
    const onSearch = () => {
        setGlobalFilter(searchInput);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            if (currentIndex < 10) {

                setData(prev => [
                    ...prev,

                    {
                        id: prev.length + 1,
                        date: `${date}.${month}.${year}''${hours}:${minutes}:${seconds}`,
                        importance: "низкая",
                        equipment: "ИБП",
                        message: "потеряно соединение",
                        responsible: "матвеев В. А."
                    }

                ]);

                setCurrentIndex(currentIndex + 1);
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [currentIndex, data]);

    const header = (
        <div style={{textAlign: 'right'}}>
            <InputText
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Поиск"
            />
            <Button label="Поиск" onClick={onSearch}/>
        </div>
    );
    return (
        <>


            <DataTable value={data} sortMode={"multiple"} header={header} globalFilter={globalFilter}
                       paginator
                       rows={5}
                       rowsPerPageOptions={[5, 10]}
                       selectionMode="single" selection={selectedRow}
                       onSelectionChange={(e: any) => setSelectedRow(e.value)}
                       rowClassName={rowClassName}
            >
                <Column field="id" header="ID" sortable/>
                <Column field="date" header="Дата" sortable/>
                <Column field="importance" header="Важность" sortable/>
                <Column field="equipment" header="Оборудование" sortable/>
                <Column field="message" header="Сообщение" sortable/>
                <Column field="responsible" header="Ответственный" sortable/>
                <Column
                    headerStyle={{width: '3rem'}}
                    bodyStyle={{textAlign: 'center'}}
                    body={(rowData) => (
                        <button
                            tabIndex={-1}
                            // onClick={(e: any) => handleKeyDown(e, rowData)}
                            onKeyDown={(e) => handleKeyDown(e, rowData)}
                        >
                            Прочитать
                        </button>
                    )}
                />
            </DataTable>
        </>
    )
}