import React from "react";

export default function LoginHeader() {
  return (
    <header style={styles.header}>
      <h1>Universitatea Ștefan cel Mare Suceava</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#002855",
    color: "white",
    padding: "10px",
    textAlign: "center",
    fontSize: "18px",
  },
};
