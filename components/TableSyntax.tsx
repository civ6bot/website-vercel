import React, { useState, useEffect } from 'react'
import { useTheme } from "nextra-theme-docs";
import getLocale from "../text/getLocale";
import { Table } from "@nextui-org/react";
import styles from "./Table.module.css";
import tableSyntaxContent from "../data/TableSyntax.content.json";

export default (props: {lang: string, page: string, customCommandSyntax: string|undefined}) => {
    const [mounted, setMounted] = useState(false);
    const {theme} = useTheme();
    useEffect(() => { setMounted(true); }, []);
    if(!mounted)
        return null;
    const isDarkMode = (theme == "dark");

    let items: Array<{
        parameter?: string, 
        type?: string,
        defaultValue?: string,
        description?: string
    }> = tableSyntaxContent[props.page] ?? [];

    let commandArgs = items.map(
        (paramObj, index) => `[${paramObj.parameter}]` + (
            (!items[index]?.defaultValue 
            && items[index+1] 
            && items[index+1]?.defaultValue) 
                ? " ⠀|⠀" 
                : ""
        )
    );
    let commandSyntax = <p style={{
        fontSize: 20,
        fontWeight: 500
    }}>{
        (!!props.customCommandSyntax) 
            ? props.customCommandSyntax 
            : `/${props.page} ${commandArgs.join(" ")}`
    }</p>
    if(items.length == 0)
        return <>
            {commandSyntax}
            {getLocale("tableNoParameters", props.lang)}
        </>

    items.forEach(item => {
        Object.keys(item).forEach(key => {
            item[key] = getLocale(item[key], props.lang);
        });
    });

    const columns = [
        "tableHeaderParameter",
        "tableHeaderType",
        "tableHeaderOptional",
        "tableHeaderDefaultValue",
        "tableHeaderDescription"
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
    let columnCellStyleFirst = {
        ...columnCellStyle,
        whiteSpace: "nowrap"
    }
    
    let tableBody;
    if(items.some((item) => (item.defaultValue ?? "").length > 0)) {
        tableBody = <Table.Body items={items}>
            {(item) => (
                <Table.Row key={item.parameter}>
                    <Table.Cell css={columnCellStyleFirst}>{item.parameter ?? ""}</Table.Cell>
                    <Table.Cell css={columnCellStyle}>{item.type ?? ""}</Table.Cell>
                    <Table.Cell css={columnCellStyle}>{(item.defaultValue) ? '✔️' : ""}</Table.Cell>
                    <Table.Cell css={columnCellStyle}>{(item.defaultValue) ? item.defaultValue ?? "" : ""}</Table.Cell>
                    <Table.Cell css={columnCellStyle}>{item.description ?? ""}</Table.Cell>
                </Table.Row>
            )}
        </Table.Body>
    } else {
        tableBody = <Table.Body items={items}>
            {(item) => (
                <Table.Row key={item.parameter}>
                    <Table.Cell css={columnCellStyleFirst}>{item.parameter ?? ""}</Table.Cell>
                    <Table.Cell css={columnCellStyle}>{item.type ?? ""}</Table.Cell>
                    <Table.Cell css={columnCellStyle}>{item.description ?? ""}</Table.Cell>
                </Table.Row>
            )}
        </Table.Body>;
        columns.splice(2, 2);
    }

    return (
        <>
            {commandSyntax}
            <div 
                data-theme={(isDarkMode) ? "dark" : "light"} 
                className={styles.pageTable}
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
        </>
    );
}
