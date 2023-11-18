import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    width: "50%",
    height: "100%",
    flex: 1,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    position: "absolute",
    zIndex: 2,
  },
  navText: {
    textAlign: "left",
    color: COLORS.primary,
    fontSize: SIZES.medium,
    marginBottom: 10,
    fontFamily: FONT.regular,
  },
  navTab: {
    backgroundColor: COLORS.lightWhite,
    border: 1,
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  closeIcon: {
    position: "absolute",
    right: -3,
    top: -5,
    backgroundColor: COLORS.lightWhite,
    padding: 10,
    borderRadius: 60,
  },
  navContainer: {
    marginTop: 30,
  },
});

export default styles;
