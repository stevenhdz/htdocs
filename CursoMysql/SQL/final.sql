create database bibliotecaUniremington;

use bibliotecaUniremington;

CREATE TABLE Aliumno (
  idAlumno int(11) NOT NULL,
  CodigoAlumno varchar(45) NOT NULL,
  EdadAlumno varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla Aliumno
--

INSERT INTO Aliumno (idAlumno, CodigoAlumno, EdadAlumno) VALUES
(1, '1017247467', '24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla Asesores
--

CREATE TABLE Asesores (
  idAsesores int(11) NOT NULL,
  idEscuelas int(11) NOT NULL,
  idPersona int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla Asesores
--

INSERT INTO Asesores (idAsesores, idEscuelas, idPersona) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla Autores
--

CREATE TABLE Autores (
  idAutores int(11) NOT NULL,
  idPersona int(11) NOT NULL,
  idLibros int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla Autores
--

INSERT INTO Autores (idAutores, idPersona, idLibros) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla AutoresRevistas
--

CREATE TABLE AutoresRevistas (
  idAutores int(11) NOT NULL,
  idRevistas int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla AutoresRevistas
--

INSERT INTO AutoresRevistas (idAutores, idRevistas) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla Bibliotecario
--

CREATE TABLE Bibliotecario (
  idBibliotecario int(11) NOT NULL,
  idPersona int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla Bibliotecario
--

INSERT INTO Bibliotecario (idBibliotecario, idPersona) VALUES
(2, 1),
(1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla Escuelas
--

CREATE TABLE Escuelas (
  idEscuelas int(11) NOT NULL,
  Nombre escuelas varchar(45) NOT NULL,
  idFacultades int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla Escuelas
--

INSERT INTO Escuelas (idEscuelas, Nombre escuelas, idFacultades) VALUES
(1, 'Escuela remington', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla Facultades
--

CREATE TABLE Facultades (
  idFacultades int(11) NOT NULL,
  Nombre Facultad varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla Facultades
--

INSERT INTO Facultades (idFacultades, Nombre Facultad) VALUES
(1, 'Torre 2 biblioteca Remington');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla LibroPrestamoLibros
--

CREATE TABLE LibroPrestamoLibros (
  idLibros int(11) NOT NULL,
  idPrestamoLibros int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla LibroPrestamoLibros
--

INSERT INTO LibroPrestamoLibros (idLibros, idPrestamoLibros) VALUES
(1, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla Libros
--

CREATE TABLE Libros (
  idLibros int(11) NOT NULL,
  CodigoLibro varchar(45) NOT NULL,
  NombreLibro varchar(45) NOT NULL,
  editorial varchar(45) NOT NULL,
  numeroedicion varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla Libros
--

INSERT INTO Libros (idLibros, CodigoLibro, NombreLibro, editorial, numeroedicion) VALUES
(1, '111', 'Nodejs 2021', 'Programacion', '6');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla Persona
--

CREATE TABLE Persona (
  idPersona int(11) NOT NULL,
  dni varchar(45) NOT NULL,
  Nombres varchar(75) NOT NULL,
  Apellidos varchar(45) NOT NULL,
  genero varchar(45) NOT NULL,
  direccion varchar(45) NOT NULL,
  telefono varchar(45) NOT NULL,
  correo varchar(45) NOT NULL,
  idAlumno int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla Persona
--

INSERT INTO Persona (idPersona, dni, Nombres, Apellidos, genero, direccion, telefono, correo, idAlumno) VALUES
(1, '1017247467', 'Alexander', 'Hernandez', 'masculino', 'calle 116', '3023571736', 'stevenhernandezj@gmail.com', 1),
(2, '1017247468', 'Alex', 'Hernan', 'masculino', 'calle 116', '3023571736', 'stevenhernandezj@gmail.com', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla Prestamos
--

CREATE TABLE Prestamos (
  idPrestamos int(11) NOT NULL,
  NumeroPrestamo varchar(45) NOT NULL,
  FechaPrestamo varchar(45) NOT NULL,
  HoraPrestamo varchar(45) NOT NULL,
  idTipoPrestamo int(11) NOT NULL,
  idBibliotecario int(11) NOT NULL,
  idAlumno int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla Prestamos
--

INSERT INTO Prestamos (idPrestamos, NumeroPrestamo, FechaPrestamo, HoraPrestamo, idTipoPrestamo, idBibliotecario, idAlumno) VALUES
(1, '1', '2020-03-04', '12:00', 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla PrestamosLibros
--

CREATE TABLE PrestamosLibros (
  idPrestamoLibros int(11) NOT NULL,
  idTipoPrestamo int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla PrestamosLibros
--

INSERT INTO PrestamosLibros (idPrestamoLibros, idTipoPrestamo) VALUES
(1, 1),
(2, 1),
(3, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla PrestamosRevistas
--

CREATE TABLE PrestamosRevistas (
  idPrestamoRevistas int(11) NOT NULL,
  idTipoPrestamo int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla PrestamosRevistas
--

INSERT INTO PrestamosRevistas (idPrestamoRevistas, idTipoPrestamo) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla PrstamoTesis
--

CREATE TABLE PrstamoTesis (
  idPrestamoTesis int(11) NOT NULL,
  idTipoPrestamo int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla Revistas
--

CREATE TABLE Revistas (
  idRevistas int(11) NOT NULL,
  Añopublicacion varchar(45) NOT NULL,
  volumen varchar(45) NOT NULL,
  nombreRevista varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla Revistas
--

INSERT INTO Revistas (idRevistas, Añopublicacion, volumen, nombreRevista) VALUES
(1, '2020', '3', 'Como salir adelante');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla RevistasPrestamoRevistas
--

CREATE TABLE RevistasPrestamoRevistas (
  idRevistas int(11) NOT NULL,
  idPrestamoRevistas int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla Tesis
--

CREATE TABLE Tesis (
  idTesis int(11) NOT NULL,
  NombreTesista varchar(45) NOT NULL,
  NombreTesis varchar(45) NOT NULL,
  idFacultades int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla Tesis
--

INSERT INTO Tesis (idTesis, NombreTesista, NombreTesis, idFacultades) VALUES
(1, 'Alexander', 'Programacion Flutter app market', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla TesisPrestamoTesis
--

CREATE TABLE TesisPrestamoTesis (
  idTesis int(11) NOT NULL,
  idPrestamoTesis int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla TipoPrestamo
--

CREATE TABLE TipoPrestamo (
  idTipoPrestamo int(11) NOT NULL,
  NombreTipoPrestamo varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla TipoPrestamo
--

INSERT INTO TipoPrestamo (idTipoPrestamo, NombreTipoPrestamo) VALUES
(1, 'Prestamo de Libro');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla Aliumno
--
ALTER TABLE Aliumno
  ADD PRIMARY KEY (idAlumno);

--
-- Indices de la tabla Asesores
--
ALTER TABLE Asesores
  ADD PRIMARY KEY (idAsesores),
  ADD KEY idEscuelas (idEscuelas),
  ADD KEY idPersona (idPersona);

--
-- Indices de la tabla Autores
--
ALTER TABLE Autores
  ADD PRIMARY KEY (idAutores),
  ADD KEY idPersona (idPersona),
  ADD KEY idLibros (idLibros);

--
-- Indices de la tabla AutoresRevistas
--
ALTER TABLE AutoresRevistas
  ADD KEY idAutores (idAutores),
  ADD KEY idRevistas (idRevistas);

--
-- Indices de la tabla Bibliotecario
--
ALTER TABLE Bibliotecario
  ADD PRIMARY KEY (idBibliotecario),
  ADD KEY idPersona (idPersona);

--
-- Indices de la tabla Escuelas
--
ALTER TABLE Escuelas
  ADD PRIMARY KEY (idEscuelas),
  ADD KEY idFacultades (idFacultades);

--
-- Indices de la tabla Facultades
--
ALTER TABLE Facultades
  ADD PRIMARY KEY (idFacultades);

--
-- Indices de la tabla LibroPrestamoLibros
--
ALTER TABLE LibroPrestamoLibros
  ADD KEY idLibros (idLibros);

--
-- Indices de la tabla Libros
--
ALTER TABLE Libros
  ADD PRIMARY KEY (idLibros);

--
-- Indices de la tabla Persona
--
ALTER TABLE Persona
  ADD PRIMARY KEY (idPersona),
  ADD KEY idAlumno (idAlumno);

--
-- Indices de la tabla Prestamos
--
ALTER TABLE Prestamos
  ADD PRIMARY KEY (idPrestamos),
  ADD KEY idTipoPrestamo (idTipoPrestamo),
  ADD KEY idBibliotecario (idBibliotecario),
  ADD KEY idAlumno (idAlumno);

--
-- Indices de la tabla PrestamosLibros
--
ALTER TABLE PrestamosLibros
  ADD PRIMARY KEY (idPrestamoLibros),
  ADD KEY idTipoPrestamo (idTipoPrestamo);

--
-- Indices de la tabla PrestamosRevistas
--
ALTER TABLE PrestamosRevistas
  ADD PRIMARY KEY (idPrestamoRevistas),
  ADD KEY idTipoPrestamo (idTipoPrestamo);

--
-- Indices de la tabla PrstamoTesis
--
ALTER TABLE PrstamoTesis
  ADD PRIMARY KEY (idPrestamoTesis),
  ADD KEY idTipoPrestamo (idTipoPrestamo);

--
-- Indices de la tabla Revistas
--
ALTER TABLE Revistas
  ADD PRIMARY KEY (idRevistas);

--
-- Indices de la tabla RevistasPrestamoRevistas
--
ALTER TABLE RevistasPrestamoRevistas
  ADD KEY idRevistas (idRevistas),
  ADD KEY idPrestamoRevistas (idPrestamoRevistas);

--
-- Indices de la tabla Tesis
--
ALTER TABLE Tesis
  ADD PRIMARY KEY (idTesis),
  ADD KEY idFacultades (idFacultades);

--
-- Indices de la tabla TesisPrestamoTesis
--
ALTER TABLE TesisPrestamoTesis
  ADD KEY idTesis (idTesis),
  ADD KEY idPrestamoTesis (idPrestamoTesis);

--
-- Indices de la tabla TipoPrestamo
--
ALTER TABLE TipoPrestamo
  ADD PRIMARY KEY (idTipoPrestamo);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla Aliumno
--
ALTER TABLE Aliumno
  MODIFY idAlumno int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla Asesores
--
ALTER TABLE Asesores
  MODIFY idAsesores int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla Autores
--
ALTER TABLE Autores
  MODIFY idAutores int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla Bibliotecario
--
ALTER TABLE Bibliotecario
  MODIFY idBibliotecario int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla Escuelas
--
ALTER TABLE Escuelas
  MODIFY idEscuelas int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla Facultades
--
ALTER TABLE Facultades
  MODIFY idFacultades int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla Libros
--
ALTER TABLE Libros
  MODIFY idLibros int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla Persona
--
ALTER TABLE Persona
  MODIFY idPersona int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla Prestamos
--
ALTER TABLE Prestamos
  MODIFY idPrestamos int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla PrestamosLibros
--
ALTER TABLE PrestamosLibros
  MODIFY idPrestamoLibros int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla PrestamosRevistas
--
ALTER TABLE PrestamosRevistas
  MODIFY idPrestamoRevistas int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla PrstamoTesis
--
ALTER TABLE PrstamoTesis
  MODIFY idPrestamoTesis int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla Revistas
--
ALTER TABLE Revistas
  MODIFY idRevistas int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla Tesis
--
ALTER TABLE Tesis
  MODIFY idTesis int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla TipoPrestamo
--
ALTER TABLE TipoPrestamo
  MODIFY idTipoPrestamo int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla Asesores
--
ALTER TABLE Asesores
  ADD CONSTRAINT asesores_ibfk_1 FOREIGN KEY (idEscuelas) REFERENCES Escuelas (idEscuelas),
  ADD CONSTRAINT asesores_ibfk_2 FOREIGN KEY (idPersona) REFERENCES Persona (idPersona);

--
-- Filtros para la tabla Autores
--
ALTER TABLE Autores
  ADD CONSTRAINT autores_ibfk_1 FOREIGN KEY (idPersona) REFERENCES Persona (idPersona),
  ADD CONSTRAINT autores_ibfk_2 FOREIGN KEY (idLibros) REFERENCES Libros (idLibros);

--
-- Filtros para la tabla AutoresRevistas
--
ALTER TABLE AutoresRevistas
  ADD CONSTRAINT autoresrevistas_ibfk_1 FOREIGN KEY (idAutores) REFERENCES Autores (idAutores),
  ADD CONSTRAINT autoresrevistas_ibfk_2 FOREIGN KEY (idRevistas) REFERENCES Revistas (idRevistas);

--
-- Filtros para la tabla Bibliotecario
--
ALTER TABLE Bibliotecario
  ADD CONSTRAINT bibliotecario_ibfk_1 FOREIGN KEY (idPersona) REFERENCES Persona (idPersona);

--
-- Filtros para la tabla Escuelas
--
ALTER TABLE Escuelas
  ADD CONSTRAINT escuelas_ibfk_1 FOREIGN KEY (idFacultades) REFERENCES Facultades (idFacultades);

--
-- Filtros para la tabla LibroPrestamoLibros
--
ALTER TABLE LibroPrestamoLibros
  ADD CONSTRAINT libroprestamolibros_ibfk_1 FOREIGN KEY (idLibros) REFERENCES Libros (idLibros),
  ADD CONSTRAINT libroprestamolibros_ibfk_2 FOREIGN KEY (idLibros) REFERENCES PrestamosLibros (idPrestamoLibros);

--
-- Filtros para la tabla Persona
--
ALTER TABLE Persona
  ADD CONSTRAINT persona_ibfk_1 FOREIGN KEY (idAlumno) REFERENCES Aliumno (idAlumno);

--
-- Filtros para la tabla Prestamos
--
ALTER TABLE Prestamos
  ADD CONSTRAINT prestamos_ibfk_1 FOREIGN KEY (idTipoPrestamo) REFERENCES TipoPrestamo (idTipoPrestamo),
  ADD CONSTRAINT prestamos_ibfk_2 FOREIGN KEY (idBibliotecario) REFERENCES Bibliotecario (idBibliotecario),
  ADD CONSTRAINT prestamos_ibfk_3 FOREIGN KEY (idAlumno) REFERENCES Aliumno (idAlumno);

--
-- Filtros para la tabla PrestamosLibros
--
ALTER TABLE PrestamosLibros
  ADD CONSTRAINT prestamoslibros_ibfk_1 FOREIGN KEY (idTipoPrestamo) REFERENCES TipoPrestamo (idTipoPrestamo);

--
-- Filtros para la tabla PrestamosRevistas
--
ALTER TABLE PrestamosRevistas
  ADD CONSTRAINT prestamosrevistas_ibfk_1 FOREIGN KEY (idTipoPrestamo) REFERENCES TipoPrestamo (idTipoPrestamo);

--
-- Filtros para la tabla PrstamoTesis
--
ALTER TABLE PrstamoTesis
  ADD CONSTRAINT prstamotesis_ibfk_1 FOREIGN KEY (idTipoPrestamo) REFERENCES TipoPrestamo (idTipoPrestamo);

--
-- Filtros para la tabla RevistasPrestamoRevistas
--
ALTER TABLE RevistasPrestamoRevistas
  ADD CONSTRAINT revistasprestamorevistas_ibfk_1 FOREIGN KEY (idRevistas) REFERENCES Revistas (idRevistas),
  ADD CONSTRAINT revistasprestamorevistas_ibfk_2 FOREIGN KEY (idPrestamoRevistas) REFERENCES PrestamosRevistas (idPrestamoRevistas);

--
-- Filtros para la tabla Tesis
--
ALTER TABLE Tesis
  ADD CONSTRAINT tesis_ibfk_1 FOREIGN KEY (idFacultades) REFERENCES Facultades (idFacultades);

--
-- Filtros para la tabla TesisPrestamoTesis
--
ALTER TABLE TesisPrestamoTesis
  ADD CONSTRAINT tesisprestamotesis_ibfk_1 FOREIGN KEY (idTesis) REFERENCES Tesis (idTesis),
  ADD CONSTRAINT tesisprestamotesis_ibfk_2 FOREIGN KEY (idPrestamoTesis) REFERENCES PrstamoTesis (idPrestamoTesis);
