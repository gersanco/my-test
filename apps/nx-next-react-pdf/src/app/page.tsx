import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  render,
  renderToBuffer,
} from '@react-pdf/renderer';
export default function Home() {
  const generatePDF = async () => {
    'use server';

    // Create styles
    const styles = StyleSheet.create({
      page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
      },
      section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
      },
    });

    // Create Document Component
    const MyDocument = () => (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    );

    const buffer: Buffer = await renderToBuffer(<MyDocument />);

    return 'data:' + 'application/pdf' + ';base64,' + buffer.toString('base64');
  };

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <form action={generatePDF}>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-gray-800 rounded-lg"
          >
            Generate PDF
          </button>
        </form>
      </div>
    </main>
  );
}
