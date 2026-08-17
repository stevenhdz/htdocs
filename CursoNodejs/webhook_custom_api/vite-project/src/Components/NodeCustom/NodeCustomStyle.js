export const style = {
    body: {
        display: "flex",
        flexDirection: "column",

        transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        border: "0px solid #bbb",
        fontSize: "10pt",
        borderRadius: "10px"
    },
    selected: {
        boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
    },
    title: {
        position: "relative",
        padding: "8px 32px",
        flexGrow: 1,

        borderRadius: "10px"
    },
    contentWrapper: {
        padding: "8px",
        borderRadius: "10px",
        width: '92%',
        margin: "8px 8px 8px 8px"
    }
};
