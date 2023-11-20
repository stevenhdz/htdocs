POST -> http://localhost:8000/wsdl?wsdl   PARA splitter o sumar

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:web="http://tempuri.org/">
    <soapenv:Header/>
    <soapenv:Body>
        <web:SumRequest>
            <web:num1>2</web:num1>
            <web:num2>3</web:num2>
        </web:SumRequest>
    </soapenv:Body>
</soapenv:Envelope>

---------->

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:web="http://tempuri.org/">
    <soapenv:Header/>
    <soapenv:Body>
        <web:MessageSplitterRequest>
            <web:message>hola:aas</web:message>
            <web:splitter>:</web:splitter>
        </web:MessageSplitterRequest>
    </soapenv:Body>
</soapenv:Envelope>

POST http://localhost:8000/resta?wsdl  PARA resta

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:web="http://tempuri.org/">
    <soapenv:Header/>
    <soapenv:Body>
         <!--se colocan el operation element name-->
        <web:SubtractRequest>
             <!--se colocan las variables name types-->
            <web:num1>1</web:num1>
            <web:num2>2</web:num2>
        </web:SubtractRequest>
    </soapenv:Body>
</soapenv:Envelope>

ejemplo de consumo en fetch

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/xml");

var raw = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\"\r\n    xmlns:web=\"http://tempuri.org/\">\r\n    <soapenv:Header/>\r\n    <soapenv:Body>\r\n        <web:MessageSplitterRequest>\r\n            <web:message>hola:aas</web:message>\r\n            <web:splitter>:</web:splitter>\r\n        </web:MessageSplitterRequest>\r\n    </soapenv:Body>\r\n</soapenv:Envelope>";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8000/wsdl?wsdl", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));