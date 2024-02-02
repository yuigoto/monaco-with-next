"use client";

import { Box, Button, ButtonGroup, Stack, Typography } from "@mui/material";
import MonacoEditor from "@monaco-editor/react";
import { SettingsTwoTone } from "@mui/icons-material";

interface EditorPageContentsProps {}

const EditorPageContents = ({}: EditorPageContentsProps) => {
  return (
    <Stack
      direction={"row"}
      gap={0}
      sx={{
        background: "#1d1d1d",
        height: "100vh",
        width: "100%",
      }}
    >
      <Stack direction={"column"} flex={1}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{ minHeight: 64, borderBottom: "1px solid #808080", p: 1 }}
          gap={1}
        >
          <Typography>Toolbar</Typography>
          <ButtonGroup>
            <Button
              variant={"outlined"}
              color={"primary"}
              size={"small"}
              sx={{ p: 1, minWidth: 0 }}
            >
              <SettingsTwoTone fontSize={"small"} /> A
            </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              size={"small"}
              sx={{ p: 1, minWidth: 0 }}
            >
              <SettingsTwoTone fontSize={"small"} /> B
            </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              size={"small"}
              sx={{ p: 1, minWidth: 0 }}
            >
              <SettingsTwoTone fontSize={"small"} /> C
            </Button>
          </ButtonGroup>
        </Stack>
        <Box sx={{ p: 0.25, flex: 1 }}>
          <MonacoEditor
            defaultLanguage={"javascript"}
            defaultValue={`/**
 * Implements an in-memory storage, using a singleton.
 */
class IncognitoStorageHandler implements Storage {
  protected static INSTANCE: IncognitoStorageHandler;

  protected keys: Array<string> = [];

  protected storage: Map<string, any> = new Map();

  constructor() {
    if (IncognitoStorageHandler.INSTANCE)
      return IncognitoStorageHandler.INSTANCE;
    IncognitoStorageHandler.INSTANCE = this;
  }

  get length(): number {
    return this.storage.size;
  }

  key(index: number): string {
    return this.keys[index];
  }

  getItem(key: string): any {
    return this.storage.get(key);
  }

  setItem(key: string, value: any): void {
    this.storage.set(key, JSON.stringify(value));
    this.updateKeys();
  }

  removeItem(key: string): void {
    this.storage.delete(key);
    this.updateKeys();
  }

  clear() {
    this.storage.clear();
    this.keys = [];
  }

  private updateKeys() {
    this.keys = Array.from(this.storage.keys());
  }
}

const IncognitoStorage = new IncognitoStorageHandler();

export default IncognitoStorage;
`}
            height={"100%"}
            theme={"vs-dark"}
          />
        </Box>
      </Stack>
      <Box sx={{ background: "#4a4a4a" }} flex={1}>
        <Stack
          alignItems={"flex-start"}
          justifyContent={"center"}
          sx={{ minHeight: 64, borderBottom: "1px solid #808080", p: 1 }}
        >
          <Typography variant={"h5"} fontWeight={400}>
            Output
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default EditorPageContents;
