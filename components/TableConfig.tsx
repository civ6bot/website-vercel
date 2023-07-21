import React, { useState, useEffect } from 'react'
import { useTheme } from "nextra-theme-docs";
import getLocale from "../text/getLocale";
import { Table } from "@nextui-org/react";
import styles from "./Table.module.css";
import tableConfigContent from "../data/TableConfig.content.json";

export default (props: {lang: string, page: string}) => {
    const [mounted, setMounted] = useState(false);
    const {theme} = useTheme();
    useEffect(() => { setMounted(true); }, []);
    if(!mounted)
        return null;
    const isDarkMode = (theme == "dark");

    let items: Array<{
        config?: string[], 
        type?: string,
        defaultValue?: string,
        borderValue?: string
    }> = tableConfigContent[props.page] ?? [];
    if(items.length == 0) 
        return null;

    items.forEach(item => {
        Object.keys(item).forEach(key => {
            if(Array.isArray(item[key]))
                item[key] = item[key].map((config: string) => getLocale(config, props.lang));
            else
                item[key] = getLocale(item[key], props.lang);
        });
    });

    const columns = [
        "tableHeaderConfig",
        "tableHeaderType",
        "tableHeaderDefaultValue",
        "tableHeaderBorderValue"
    ].map(key => { return {
        key: key,
        label: getLocale(key, props.lang).toUpperCase()
    }});
    let tableStyle = {
        backgroundColor: (isDarkMode) ? "#333333" : "white"
    };
    let headerCellStyle = {
        backgroundColor: (isDarkMode) ? "#444" : "#EEE", 
        color: (isDarkMode) ? "white" : "black", 
        textAlign: "center", 
        padding: "0px 20px"
    };

    let columnCellStyle = {
        color: (isDarkMode) ? "white" : "black",
        whiteSpace: 'normal', 
        textAlign: "center", 
        padding: "15px 20px",
        zIndex: 14  // Меню мобильного приложения не должно перекрывать
    };
    
    let tableBody = <Table.Body items={items}>
        {(item) => (
            <Table.Row key={items.indexOf(item)}>
                <Table.Cell css={columnCellStyle}>{item.config?.join(" → ") ?? ""}</Table.Cell>
                <Table.Cell css={columnCellStyle}>{item.type ?? ""}</Table.Cell>
                <Table.Cell css={columnCellStyle}>{item.defaultValue ?? "—"}</Table.Cell>
                <Table.Cell css={columnCellStyle}>{item.borderValue ?? ""}</Table.Cell>
            </Table.Row>
        )}
    </Table.Body>;

    return (
        <>
            <div 
                data-theme={(isDarkMode) ? "dark" : "light"} 
                className={styles.pageTable}
                style={{marginBottom: 12}}
            >
                <Table
                    aria-label="Table with parameters"
                    containerCss={{height: "auto", minWidth: "100%"}}
                    bordered={true}
                    css={tableStyle}
                    lined={true}
                >
                    <Table.Header columns={columns}>
                        {(column) => (
                            <Table.Column 
                                key={column.key} 
                                css={headerCellStyle}
                            >{column.label}</Table.Column>
                        )}
                    </Table.Header>
                    {tableBody}
                </Table>
            </div>
            <a href="../../common/config" className={styles.configLink}>
                {getLocale("pageConfigsTip", props.lang)}
            </a>
        </>
    );
}
