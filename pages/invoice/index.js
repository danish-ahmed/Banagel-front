import React from "react";
import {
  PDFViewer,
  Page,
  Document,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import InvoiceTitle from "../../components/invoice/InvoiceTitle";
import BillTo from "../../components/invoice/BillTo";
import InvoiceNo from "../../components/invoice/InvoiceNo";
import InvoiceItemsTable from "../../components/invoice/InvoiceItemsTable";
import InvoiceThankYouMsg from "../../components/invoice/InvoiceThankYouMsg";
// import logo from "../../public/images/cartoon1.jpg";
import { connect } from "react-redux";
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const Invoice = ({ invoice }) => (
  <PDFViewer width="1000" height="600" className="app">
    <Document>
      <Page size="A4" style={styles.page}>
        <Image style={styles.logo} src={`../../public/images/cartoon1.jpg"`} />
        <InvoiceTitle title="Invoice" />
        <InvoiceNo invoice={invoice} />
        <BillTo invoice={invoice} />
        <InvoiceItemsTable invoice={invoice} />
        <InvoiceThankYouMsg />
      </Page>
    </Document>
  </PDFViewer>
);

const mapStateToProps = (state) => ({
  invoice: state.invoice,
});
export default connect(mapStateToProps, null)(Invoice);
