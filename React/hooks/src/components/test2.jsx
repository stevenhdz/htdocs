import React, { useState, useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  Stack,
  Paper,
  Typography,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

/* =====================
   NODE FACTORIES
===================== */

const createFunctionNode = (parentPath = []) => ({
  id: crypto.randomUUID(),
  type: "FUNCTION",
  name: "Función",
  path: parentPath,
  data: { value: "" },
});

const createConditionalNode = (parentPath = []) => ({
  id: crypto.randomUUID(),
  type: "CONDITIONAL",
  name: "Condicional",
  path: parentPath,
  params: {
    criteria: "",
    value: "",
    trueWay: [],
    falseWay: [],
  },
});

/* =====================
   FIND NODE (RECURSIVE)
===================== */

const findNodeById = (node, id) => {
  if (node.id === id) return node;

  if (node.type === "CONDITIONAL") {
    for (const key of ["trueWay", "falseWay"]) {
      for (const child of node.params[key]) {
        const found = findNodeById(child, id);
        if (found) return found;
      }
    }
  }
  return null;
};

/* =====================
   INITIAL MODEL
===================== */

const ROOT_ID = "root";

const initialFlow = {
  fieldName: "fecha",
  position: 0,
  functions: [
  ],
};

/* =====================
   COMPONENT
===================== */

export function FlowNavigatorSingleGrid2() {
  const [flow, setFlow] = useState(initialFlow);
  const [stack, setStack] = useState([ROOT_ID]);
  const [currentWay, setCurrentWay] = useState("trueWay");

  const [openAdd, setOpenAdd] = useState(false);
  const [newType, setNewType] = useState("FUNCTION");

  /* =====================
     CURRENT NODE
  ===================== */

  const currentNode = useMemo(() => {
    const id = stack[stack.length - 1];

    for (const fn of flow.functions) {
      const found = findNodeById(fn, id);
      if (found) return found;
    }
    return null;
  }, [flow, stack]);

  const isAtRoot = stack.length === 1;
  const isConditional = currentNode?.type === "CONDITIONAL";

  /* =====================
     ROWS
  ===================== */

  const rows = isAtRoot
    ? flow.functions
    : isConditional
      ? currentNode.params[currentWay]
      : [];

  /* =====================
     CONDITIONAL VALIDATION
  ===================== */

  const conditionalInBranch = !isAtRoot
    ? rows.find((n) => n.type === "CONDITIONAL")
    : null;

  const canGoNext = Boolean(conditionalInBranch);

  /* =====================
     UPDATE CONDITIONAL PARAMS
  ===================== */

  const updateConditionalParam = (key, value) => {
    const updateTree = (node) => {
      if (node.id === currentNode.id && node.type === "CONDITIONAL") {
        return {
          ...node,
          params: { ...node.params, [key]: value },
        };
      }

      if (node.type === "CONDITIONAL") {
        return {
          ...node,
          params: {
            ...node.params,
            trueWay: node.params.trueWay.map(updateTree),
            falseWay: node.params.falseWay.map(updateTree),
          },
        };
      }

      return node;
    };

    setFlow((prev) => ({
      ...prev,
      functions: prev.functions.map(updateTree),
    }));
  };

  /* =====================
     ADD NODE
  ===================== */

  const addNode = () => {
    // 👉 nivel tabla
    if (isAtRoot) {
      const newFn =
        newType === "CONDITIONAL"
          ? createConditionalNode([])
          : createFunctionNode([]);

      setFlow((prev) => ({
        ...prev,
        functions: [...prev.functions, newFn],
      }));

      setOpenAdd(false);
      return;
    }

    // 👉 dentro de un conditional
    if (newType === "CONDITIONAL" && conditionalInBranch) {
      alert("Este branch ya tiene una condicional");
      return;
    }

    const parentPath = [
      ...currentNode.path,
      {
        id: currentNode.id,
        name: currentNode.name,
        type: currentNode.type,
      },
    ];

    const newNode =
      newType === "CONDITIONAL"
        ? createConditionalNode(parentPath)
        : createFunctionNode(parentPath);

    const updateTree = (node) => {
      if (node.id === currentNode.id && node.type === "CONDITIONAL") {
        return {
          ...node,
          params: {
            ...node.params,
            [currentWay]: [...node.params[currentWay], newNode],
          },
        };
      }

      if (node.type === "CONDITIONAL") {
        return {
          ...node,
          params: {
            ...node.params,
            trueWay: node.params.trueWay.map(updateTree),
            falseWay: node.params.falseWay.map(updateTree),
          },
        };
      }

      return node;
    };

    setFlow((prev) => ({
      ...prev,
      functions: prev.functions.map(updateTree),
    }));

    setOpenAdd(false);
  };

  /* =====================
     NAVIGATION
  ===================== */

  const goNext = () => {
    if (!conditionalInBranch) return;
    setStack((prev) => [...prev, conditionalInBranch.id]);
    setCurrentWay("trueWay");
  };

  const goPrev = () => {
    if (stack.length === 1) return;
    setStack((prev) => prev.slice(0, -1));
  };

  /* =====================
     GRID
  ===================== */

  const columns = [
    { field: "name", headerName: "Nombre", flex: 1 },
    { field: "type", headerName: "Tipo", width: 140 },
  ];

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">
  {isAtRoot
    ? `Agregando funciones al campo: ${flow.fieldName}`
    : currentNode.name}
</Typography>

      {!isAtRoot && (
        <Typography variant="caption">
          Ruta: {currentNode.path.map((p) => ` / ${p.name}`).join("")}
        </Typography>
      )}

      {isConditional && !isAtRoot && (
        <Stack spacing={2} mt={2}>
          <TextField
            label="Criteria"
            size="small"
            value={currentNode.params.criteria}
            onChange={(e) =>
              updateConditionalParam("criteria", e.target.value)
            }
          />
          <TextField
            label="Value"
            size="small"
            value={currentNode.params.value}
            onChange={(e) =>
              updateConditionalParam("value", e.target.value)
            }
          />
        </Stack>
      )}

      <Stack direction="row" spacing={2} mt={2}>
        {!isAtRoot && (
          <Select
            size="small"
            value={currentWay}
            onChange={(e) => setCurrentWay(e.target.value)}
          >
            <MenuItem value="trueWay">TRUE WAY</MenuItem>
            <MenuItem value="falseWay">FALSE WAY</MenuItem>
          </Select>
        )}

        <Button variant="outlined" onClick={() => setOpenAdd(true)}>
          ➕ Agregar
        </Button>
      </Stack>

      <div style={{ height: 260, marginTop: 16 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          hideFooter
          onRowClick={(params) =>
            setStack((prev) => [...prev, params.row.id])
          }
        />
      </div>

      <Stack direction="row" spacing={2} mt={2}>
        <Button
          variant="contained"
          onClick={goNext}
          disabled={!canGoNext || isAtRoot}
        >
          NEXT
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={goPrev}
          disabled={stack.length === 1}
        >
          PREV
        </Button>
      </Stack>

      <Dialog open={openAdd} onClose={() => setOpenAdd(false)}>
        <DialogTitle>Agregar nodo</DialogTitle>
        <DialogContent>
          <Select
            fullWidth
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
            sx={{ mt: 2 }}
          >
            <MenuItem value="FUNCTION">Función</MenuItem>
            <MenuItem
              value="CONDITIONAL"
              disabled={!isAtRoot && conditionalInBranch}
            >
              Condicional
            </MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={addNode}>Confirmar</Button>
          <Button onClick={() => setOpenAdd(false)}>Cancelar</Button>
        </DialogActions>
      </Dialog>

      <pre style={{ marginTop: 16, maxHeight: 300, overflow: "auto" }}>
        {JSON.stringify(flow, null, 2)}
      </pre>
    </Paper>
  );
}
