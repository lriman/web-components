import oldColors from '../oldColors';
import colors from '../colors';

export default {
  profile: {
    accountBorderColor: oldColors.white,
    userNameColor: oldColors.white,
    userRatingColor: oldColors.greyDark50,
    timerColor: {
      normal: oldColors.greyDark70,
      active: oldColors.white,
      littleTime: colors.accents.error.medium,
    },
  },
  pgnViewer: {
    footerBorderColor: oldColors.white,
  },
  settings: {
    gameIconColor: oldColors.purpleHigh,
    buttons: {
      color: {
        normal: oldColors.white,
        hovered: oldColors.purpleHigh,
      },
    },
    modalWindow: {
      color: oldColors.white,
      saveBackground: 'linear-gradient(360deg, #2D2E37 11.22%, rgba(45, 46, 55, 0) 100%)',
      scrollbar: {
        track: {
          backgroundColor: oldColors.transparent,
        },
        thumb: {
          backgroundColor: oldColors.greyDark80,
        },
      },
    },
  },
  actionPopup: {
    color: oldColors.white,
    backgroundColor: oldColors.purple,
    boxShadow: '0px 0px 53.0387px rgba(0, 0, 0, 0.75)',
    iconDotWithWaveColor: oldColors.purpleHigh,
  },
  pawnPromotionModal: {
    backgroundColor: oldColors.white,
    boxShadow: '0px 0px 53.0387px rgba(0, 0, 0, 0.75)',
    figureBackgroundColor: {
      normal: oldColors.transparent,
      active: colors.brand.primary.main,
      hovered: colors.brand.primary.main,
    },
  },
  finishGameModal: {
    backgroundColor: oldColors.purple,
    winnerLabelColor: oldColors.greyLight5,
    rating: {
      winColor: oldColors.green,
      lostColor: oldColors.red,
      drawColor: oldColors.greyDark30,
    },
    userNameColor: oldColors.white,
    countryNameColor: oldColors.whiteHigh,
    playerRatingColor: oldColors.purpleMedium,
    result: {
      winColor: oldColors.red,
      lostColor: oldColors.purpleMedium,
      drawColor: oldColors.greyLight20,
      separatorColor: oldColors.white,
    },
  },
};
