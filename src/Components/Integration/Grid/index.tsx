import * as React from 'react';
import moment from 'moment';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { GridPDFExport } from '@progress/kendo-react-pdf';
import {DataResult} from "@progress/kendo-data-query";


export interface EmpresaAtivaGridProps {
    data: DataResult
}

export interface EmpresaAtivaGridState {
    pdfExportRequested: boolean
}

class EmpresaAtivaGrid extends React.Component<EmpresaAtivaGridProps, EmpresaAtivaGridState > {
    gridPDFExport: any;
    state = {
        pdfExportRequested: false
    }

    exportPDF = () => {
        this.raisePDFExportRequestedFlag();
        this.gridPDFExport.save(this.props.data, this.lowerPDFExportRequestedFlag);
    }

    raisePDFExportRequestedFlag = (): void => {
        this.setState((state: EmpresaAtivaGridState): EmpresaAtivaGridState => ({
            ...state,
            pdfExportRequested: true
        }));
    }

    lowerPDFExportRequestedFlag = (): void => {
        this.setState((state: EmpresaAtivaGridState): EmpresaAtivaGridState => ({
            ...state,
            pdfExportRequested: false
        }));
    }

    render(): React.ReactNode {
        const grid = (<Grid data={this.props.data} style={{ height: '400px' }}>
            <GridToolbar>
                <button
                    title="Export PDF"
                    className="k-button k-primary"
                    onClick={this.exportPDF}
                    disabled={this.state.pdfExportRequested}
                >
                    Export PDF
                </button>
            </GridToolbar>
            <Column field="che_sequencial" title="Sequencial Cheques"/>
            <Column field="emp_codg_origem_chq" title="Empresa de Origem"/>
            <Column field="emp_codg" title="Empresa Recebedora"/>
            <Column field="che_status_cheque_pre" title="Status do Cheque" cell={(props) => {
                switch (props.dataItem.che_status_cheque_pre) {
                    case 'B':
                        return <td>Baixado</td>;
                    case 'A':
                        return <td>Aberto</td>;
                    case 'D':
                        return <td>Devolvido</td>;
                    case 'E':
                        return <td>Extornado</td>;
                    case 'C':
                        return <td>Cancelado</td>;
                    case 'U':
                        return <td>Custodia</td>;
                    case 'F':
                        return <td>Fechado</td>;
                    default:
                        return <td>Sem Status</td>;
                }

            }}/>
            <Column field="che_dta_emissao" title="Data de Emissão" cell={(props) => {
                return <td> {moment(props.dataItem.che_dta_emissao).format('DD/MM/YYYY')} </td>
            }}/>
            <Column field="che_valr_cheque" title="Empresa Recebedora" cell={(props) => {
                return props.dataItem.che_valr_cheque < 1000 ? <td style={{ color: '#ff6363' }}> R$ {props.dataItem.che_valr_cheque}</td>  : <td style={{ color: '#08c060' }}> R$ {props.dataItem.che_valr_cheque}</td>
            }}/>
        </Grid>);
        return (
            <React.Fragment>
                {grid}
            <GridPDFExport ref={(element) => { this.gridPDFExport = element; }} paperSize="A4">
                {grid}
            </GridPDFExport>
            </React.Fragment>
        );
    }
}

export default EmpresaAtivaGrid
