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

const createFunctionNode = (parentPath) => ({
  id: crypto.randomUUID(),
  type: "FUNCTION",
  name: "Función",
  path: [...parentPath],
  data: { value: "" },
});

const createConditionalNode = (parentPath) => ({
  id: crypto.randomUUID(),
  type: "CONDITIONAL",
  name: "Condicional",
  path: [...parentPath],
  params: {
    criteria: "",
    value: "",
    trueWay: [],
    falseWay: [],
  },
});

/* =====================
   FIND NODE
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
   ROOT
===================== */

const ROOT_ID = "root";

const initialTree = {
  id: ROOT_ID,
  type: "CONDITIONAL",
  name: "ROOT",
  path: [{ id: ROOT_ID, name: "ROOT", type: "CONDITIONAL" }],
  params: {
    criteria: "",
    value: "",
    trueWay: [],
    falseWay: [],
  },
};

/* =====================
   COMPONENT
===================== */

export function FlowNavigatorSingleGrid() {
  const [tree, setTree] = useState(initialTree);
  const [stack, setStack] = useState([ROOT_ID]);
  const [currentWay, setCurrentWay] = useState("trueWay");

  const [openAdd, setOpenAdd] = useState(false);
  const [newType, setNewType] = useState("FUNCTION");

  const currentNode = useMemo(
    () => findNodeById(tree, stack[stack.length - 1]),
    [tree, stack],
  );

  const isConditional = currentNode.type === "CONDITIONAL";
  const rows = isConditional ? currentNode.params[currentWay] : [];

  /* =====================
     CONDITIONAL DETECTION
  ===================== */

  const conditionalInBranch = rows.find(
    (n) => n.type === "CONDITIONAL",
  );

  const canGoNext = Boolean(conditionalInBranch);
  const hasConditionalInBranch = Boolean(conditionalInBranch);

  /* =====================
     UPDATE PARAMS
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

    setTree((prev) => updateTree(prev));
  };

  /* =====================
     ADD NODE (PATH AQUI)
  ===================== */

  const addNode = () => {
    if (newType === "CONDITIONAL" && hasConditionalInBranch) {
      alert("Este branch ya tiene una condicional");
      return;
    }

    // 🔑 construir path desde el nodo actual
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

    setTree((prev) => updateTree(prev));
    setOpenAdd(false);
    setNewType("FUNCTION");
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
      {/* PATH */}
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Ruta:
        {currentNode.path.map((p) => ` / ${p.name}`).join("")}
      </Typography>

      <Typography variant="h6">
        {currentNode.name} ({currentNode.type})
      </Typography>

      {/* PARAMS CONDICIONAL */}
      {isConditional && (
        <Stack spacing={2} mt={2}>
          <TextField
            label="Criteria"
            value={currentNode.params.criteria}
            onChange={(e) =>
              updateConditionalParam("criteria", e.target.value)
            }
            size="small"
          />
          <TextField
            label="Value"
            value={currentNode.params.value}
            onChange={(e) =>
              updateConditionalParam("value", e.target.value)
            }
            size="small"
          />
        </Stack>
      )}

      {/* CONTROLES */}
      <Stack direction="row" spacing={2} mt={2}>
        <Select
          size="small"
          value={currentWay}
          onChange={(e) => setCurrentWay(e.target.value)}
        >
          <MenuItem value="trueWay">TRUE WAY</MenuItem>
          <MenuItem value="falseWay">FALSE WAY</MenuItem>
        </Select>

        <Button variant="outlined" onClick={() => setOpenAdd(true)}>
          ➕ Agregar
        </Button>
      </Stack>

      {/* GRID */}
      <div style={{ height: 260, marginTop: 16 }}>
        <DataGrid rows={rows} columns={columns} hideFooter />
      </div>

      {/* NAV */}
      <Stack direction="row" spacing={2} mt={2}>
        <Button
          variant="contained"
          onClick={goNext}
          disabled={!canGoNext}
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

      {/* MODAL */}
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
              disabled={hasConditionalInBranch}
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

      {/* DEBUG */}
      <pre style={{ marginTop: 16, maxHeight: 300, overflow: "auto" }}>
        {JSON.stringify(tree, null, 2)}
      </pre>
    </Paper>
  );
}
