Post http://localhost:3000/subtract   -> multiply or add

-> multiply or add -> body -> raw -> xml

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.example.com/">
  <soapenv:Header/>
  <soapenv:Body>
    <web:Subtract>
      <web:intA>3</web:intA>
      <web:intB>2</web:intB>
    </web:Subtract>
  </soapenv:Body>
</soapenv:Envelope>

-> result

[{"SubtractResult":1},"
<?xml version=\"1.0\" encoding=\"utf-8\"?>
<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">
    <soap:Body>
        <SubtractResponse xmlns=\"http://tempuri.org/\">
            <SubtractResult>1</SubtractResult>
        </SubtractResponse>
    </soap:Body>
</soap:Envelope>",null,"
<?xml version=\"1.0\" encoding=\"utf-8\"?>
<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"  xmlns:tm=\"http://microsoft.com/wsdl/mime/textMatching/\" xmlns:tns=\"http://tempuri.org/\">
    <soap:Body>
        <Subtract xmlns=\"http://tempuri.org/\">
            <intA>3</intA>
            <intB>2</intB>
        </Subtract>
    </soap:Body>
</soap:Envelope>",null]