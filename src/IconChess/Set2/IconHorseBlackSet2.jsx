import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, REFS } from '../_constants';
import IconPrimitive from '../_internal/IconPrimitive';

export default function IconHorseBlackSet2(props) {
  const type = TYPES.HORSE_BLACK_SET_2;

  return (
    <IconPrimitive {...props} type={type} viewBox={45}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5887 23.1995C21.8069 25.5561 19.9303 27.6509 19.363 28.3055C17.4864 30.5749 14.6061 31.7095 13.1659 40.4814H40.3981C40.7472 32.015 39.6998 21.5411 32.4117 13.9475C30.5788 12.071 27.7421 10.5872 25.1673 9.84526C24.2944 9.58341 21.1523 9.10335 21.065 9.10335C21.0213 9.01607 20.4976 8.27417 20.2794 8.01232C19.5375 7.18314 18.4465 6.09211 17.6173 5.3502C17.3118 5.08836 16.2644 4.47738 16.2644 4.52102C16.1772 4.87015 16.0026 6.44124 16.1772 7.40134C16.2208 7.66319 16.439 8.92879 16.6136 9.147C16.6136 9.147 15.7844 9.147 15.6098 9.23428C15.348 9.01607 14.737 8.18689 14.3879 7.75047C13.7769 7.00857 12.4676 6.09211 12.0312 5.8739C11.9003 5.78662 11.5075 5.61205 11.3766 5.56841C11.2893 6.57216 11.5512 7.79412 11.9003 8.79786C12.0312 9.147 12.5549 10.4562 12.5549 10.369C10.9838 11.1981 10.2419 12.8129 9.84916 13.9039C9.41275 15.2131 9.54367 16.566 8.88905 17.8316C7.40525 20.6683 4.52492 23.4177 4.87406 27.2145C5.00498 28.5237 5.31047 29.222 5.79052 29.7893C6.18329 30.2257 6.70699 30.5749 7.36161 30.8367C7.84166 31.0113 8.409 30.8804 8.9327 30.6621C8.9327 30.7931 10.1983 31.6659 11.7257 30.8367C13.8642 29.6584 13.9514 27.9564 15.217 26.298C15.8717 25.5125 17.3118 25.4688 18.2283 25.3379C19.5812 25.1197 20.7158 24.3342 21.5887 23.1995ZM14.2133 16.3478C13.8642 16.6969 12.8604 17.177 12.7731 17.0897C12.6858 17.0024 12.8168 16.6097 12.8604 16.566C13.0786 15.7805 13.7332 15.2131 14.3442 14.7331C14.5188 14.6022 14.9552 14.3403 14.9988 14.3403C14.9988 14.3403 14.9988 15.0822 14.7806 15.5623C14.6933 15.8241 14.4315 16.1296 14.2133 16.3478ZM7.71074 26.298C8.32172 25.9489 9.23818 26.7781 7.92895 27.6509C7.23069 28.1746 6.44514 27.0399 7.71074 26.298Z"
        fill="#2D2E37"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0936 4.37614C17.3892 4.55354 17.7644 4.79264 17.9553 4.95625L17.9636 4.96352C18.8071 5.71822 19.9117 6.82284 20.6664 7.66633C20.6704 7.67086 20.6744 7.67546 20.6783 7.68013C20.8012 7.82764 20.9968 8.09305 21.1601 8.32168C21.2374 8.42988 21.3106 8.53418 21.3696 8.62028C21.4594 8.63332 21.571 8.65 21.699 8.66961C22.0219 8.71908 22.4527 8.78768 22.9082 8.86451C23.8012 9.01513 24.8385 9.20532 25.3139 9.34745C27.9503 10.1076 30.8727 11.629 32.7832 13.585L32.7863 13.5882C40.2255 21.3392 41.3552 31.9965 40.9165 40.508C40.9023 40.7837 40.6745 41 40.3985 41H13.1663C13.0132 41 12.8679 40.9323 12.7693 40.8151C12.6708 40.6979 12.629 40.5432 12.6553 40.3923C13.4276 35.9572 14.5281 33.4057 15.7041 31.6646C16.2906 30.7961 16.8874 30.1422 17.4472 29.5692C17.5933 29.4197 17.7346 29.2778 17.8716 29.1402C18.2682 28.742 18.6285 28.3801 18.9636 27.9748L18.9714 27.9657C18.9847 27.9503 18.9986 27.9343 19.0131 27.9176C19.3108 27.5749 19.8584 26.9444 20.3201 26.1339C20.5865 25.6662 20.8155 25.1537 20.9524 24.6165C20.1976 25.2487 19.3132 25.6882 18.3113 25.8499L18.3021 25.8513L18.302 25.8513C18.1387 25.8746 17.974 25.894 17.8081 25.9135C17.4568 25.9549 17.1 25.9969 16.739 26.0783C16.2185 26.1957 15.8384 26.3687 15.6224 26.6222C15.3338 27.002 15.1081 27.3886 14.8963 27.7853C14.8238 27.921 14.7503 28.0634 14.6754 28.2083C14.538 28.4743 14.3962 28.7487 14.2491 29.0053C13.7704 29.84 13.1532 30.6425 11.9765 31.2909L11.9736 31.2924C11.079 31.7781 10.2434 31.7706 9.62722 31.6116C9.323 31.5331 9.06953 31.4172 8.88381 31.3035C8.86088 31.2894 8.83837 31.275 8.81642 31.2604C8.3204 31.4276 7.73485 31.5241 7.18475 31.3241C7.17959 31.3222 7.17447 31.3202 7.16937 31.3182C6.45563 31.0327 5.86093 30.6423 5.40538 30.1362C5.40185 30.1323 5.39838 30.1283 5.39496 30.1242C4.82812 29.4543 4.49634 28.646 4.35834 27.266L4.35793 27.2619L4.35794 27.2619C4.16947 25.2122 4.85787 23.4651 5.74366 21.9066C6.14848 21.1943 6.602 20.509 7.03664 19.8523C7.07604 19.7927 7.11528 19.7334 7.15432 19.6744C7.62841 18.9571 8.07236 18.2743 8.42928 17.5921C8.71563 17.0381 8.8368 16.4539 8.93892 15.8035C8.95479 15.7025 8.97025 15.5991 8.98601 15.4937C9.06871 14.9407 9.15946 14.3338 9.35749 13.7397L9.36153 13.7281C9.72772 12.7109 10.4267 11.1328 11.8877 10.1628C11.8586 10.0933 11.828 10.0191 11.797 9.94332C11.6488 9.58107 11.483 9.16121 11.415 8.97986L11.4108 8.96813C11.0508 7.93314 10.7639 6.63142 10.8603 5.52334C10.874 5.36512 10.9595 5.22193 11.0923 5.13474C11.225 5.04755 11.3904 5.02598 11.541 5.0762C11.6345 5.10736 11.7866 5.1718 11.9204 5.23313C12.037 5.28655 12.1852 5.35823 12.2895 5.42303C12.5554 5.56053 13.0072 5.85896 13.4588 6.20308C13.927 6.55978 14.4448 7.00309 14.7887 7.4206L14.7933 7.42628L14.7933 7.42632C14.8784 7.53267 14.9921 7.67926 15.1109 7.83235C15.2221 7.97576 15.3378 8.12486 15.4385 8.25192C15.5739 8.42279 15.6908 8.56482 15.7816 8.66837C15.8194 8.66386 15.8587 8.65989 15.8984 8.6564C15.8779 8.57175 15.8583 8.48543 15.8398 8.40059C15.756 8.01528 15.6894 7.62719 15.6665 7.49013C15.5687 6.94869 15.5719 6.26822 15.6052 5.70147C15.6384 5.13693 15.7059 4.61783 15.7616 4.39508L15.7617 4.39509C15.7893 4.28418 15.8543 4.1769 15.961 4.09948C16.0773 4.0151 16.1934 4.00345 16.2377 4.00087C16.3269 3.99567 16.3975 4.01535 16.4136 4.01983L16.4149 4.02019C16.4621 4.03325 16.5031 4.05121 16.5217 4.05954C16.5686 4.08046 16.6241 4.10896 16.6785 4.13813C16.7911 4.19856 16.9392 4.28351 17.0936 4.37614ZM16.614 9.66555H16.6138L16.6125 9.66556L16.6064 9.66557L16.5818 9.66571C16.5602 9.66587 16.5288 9.66619 16.4905 9.66684C16.4134 9.66815 16.3099 9.67075 16.2022 9.67588C16.0931 9.68108 15.987 9.68854 15.9025 9.69868C15.86 9.70378 15.8299 9.70875 15.8111 9.71274C15.8105 9.71287 15.8098 9.713 15.8093 9.71313C15.632 9.78684 15.4271 9.75677 15.2782 9.63261C15.097 9.48165 14.8429 9.17061 14.6254 8.89622C14.5015 8.7398 14.3879 8.59312 14.2824 8.4569C14.176 8.31951 14.0779 8.19276 13.9856 8.07735C13.7182 7.75353 13.2772 7.36886 12.8301 7.02825C12.4491 6.73795 12.0995 6.5066 11.8953 6.38956C11.9512 7.11709 12.1429 7.91388 12.3886 8.62142C12.453 8.79268 12.6125 9.19677 12.7572 9.55054C12.8304 9.72956 12.8978 9.89064 12.946 9.99989C12.9576 10.0261 12.9671 10.0472 12.9746 10.0635C13.0382 10.1508 13.074 10.2573 13.074 10.3688C13.074 10.3892 13.0739 10.4629 13.0422 10.5498C13.015 10.6243 12.9281 10.7878 12.7402 10.8584C11.3931 11.5987 10.7202 13.0182 10.3397 14.0736C10.174 14.5727 10.0985 15.0746 10.0156 15.6247C9.99891 15.7359 9.98188 15.849 9.96375 15.9644C9.85864 16.6338 9.71805 17.3585 9.35017 18.0698L9.34907 18.0719C8.96419 18.8077 8.49189 19.532 8.01975 20.2464C7.98134 20.3045 7.94293 20.3625 7.90455 20.4205C7.46648 21.0826 7.03209 21.7391 6.64555 22.4192C5.80783 23.8931 5.23077 25.4186 5.39078 27.1648C5.51419 28.3964 5.7914 28.9845 6.18172 29.448C6.50969 29.8104 6.95798 30.1151 7.54613 30.3516C7.83347 30.4527 8.24024 30.3888 8.7336 30.1832C8.89369 30.1165 9.07652 30.1342 9.22082 30.2304C9.28111 30.2706 9.33134 30.3223 9.36939 30.3815C9.38286 30.3913 9.40141 30.404 9.42561 30.4188C9.52492 30.4796 9.68332 30.5547 9.88644 30.6071C10.2847 30.7099 10.845 30.7243 11.4773 30.3815C12.438 29.8517 12.9334 29.2143 13.3491 28.4892C13.4868 28.2492 13.6081 28.0141 13.7368 27.7646C13.8139 27.6152 13.8936 27.4606 13.9812 27.2967C14.2067 26.8743 14.4645 26.4295 14.8051 25.9832C14.8096 25.9773 14.8142 25.9715 14.819 25.9658C15.2588 25.438 15.9236 25.1988 16.5108 25.0664C16.926 24.9727 17.3794 24.919 17.753 24.8748C17.9004 24.8573 18.0354 24.8414 18.1507 24.825C19.3438 24.6312 20.3681 23.936 21.1779 22.8831C21.308 22.714 21.5283 22.6418 21.7332 22.7011C21.9382 22.7604 22.0859 22.9391 22.1056 23.1515C22.2284 24.4785 21.7607 25.701 21.2215 26.6474C20.7076 27.5494 20.1018 28.2465 19.8008 28.5927C19.7862 28.6095 19.7723 28.6255 19.7592 28.6406C19.3918 29.0844 18.9853 29.4924 18.5806 29.8988C18.4495 30.0304 18.3186 30.1618 18.1892 30.2942C17.6498 30.8463 17.1009 31.4498 16.5637 32.2452C15.5433 33.756 14.5336 36.0062 13.7874 39.9626H39.9039C40.2681 31.6359 39.0367 21.6001 32.0395 14.3082C30.2847 12.5124 27.5358 11.0673 25.024 10.3435L25.0186 10.342L25.0186 10.3419C24.6199 10.2223 23.652 10.042 22.7357 9.88745C22.2856 9.81154 21.86 9.74376 21.5419 9.69503C21.3827 9.67065 21.2514 9.65118 21.1579 9.63789C21.111 9.63122 21.075 9.62632 21.0505 9.62319C21.0409 9.62196 21.0344 9.62119 21.0304 9.62073C20.8478 9.60842 20.6841 9.50041 20.6014 9.33519C20.6059 9.34415 20.6042 9.34151 20.5924 9.32353C20.581 9.30616 20.5602 9.27449 20.5265 9.22516C20.4704 9.14301 20.3963 9.03702 20.316 8.92465C20.1551 8.69943 19.9833 8.4676 19.8869 8.35092C19.1593 7.53841 18.0883 6.46759 17.2764 5.74068C17.1739 5.65395 16.9335 5.49415 16.6735 5.33468C16.6611 5.466 16.6498 5.61005 16.6408 5.76239C16.6088 6.30714 16.6119 6.89038 16.6879 7.30842L16.6892 7.31593L16.6892 7.31594C16.7105 7.44408 16.7744 7.81618 16.8535 8.18022C16.8933 8.36307 16.9351 8.5355 16.9754 8.67084C16.9956 8.73879 17.0133 8.78983 17.0274 8.82466C17.0315 8.83471 17.0347 8.84182 17.0368 8.84645C17.1457 8.99963 17.1635 9.20077 17.0815 9.37155C16.9951 9.55125 16.8134 9.66554 16.614 9.66555C16.614 9.66555 16.614 9.66555 16.614 9.66555ZM12.9931 10.102C12.9929 10.1017 12.9928 10.1014 12.9926 10.101C12.9966 10.1082 12.997 10.1096 12.9931 10.102ZM15.7985 9.71575C15.7986 9.71572 15.7995 9.71543 15.8015 9.71493C15.7996 9.71553 15.7985 9.71579 15.7985 9.71575ZM8.88944 17.8315L8.88946 17.8315L8.88944 17.8315C14.9385 13.8215 14.8554 13.8548 14.8463 13.8585C15.5616 14.0537 15.3293 13.8215 15.0429 13.8215L15.5616 14.3402C15.5616 14.3403 15.5616 14.3402 15.0429 14.3402L15.5616 14.3403V14.3405V14.3409L15.5616 14.3419L15.5616 14.3448L15.5615 14.3536C15.5596 14.4434 15.5605 14.4084 15.561 14.3834C15.5463 14.6919 15.5539 14.5724 15.5577 14.4865C15.4405 15.4607 15.5021 15.0895 15.5311 14.8284C15.2915 15.7884 15.2942 15.7826 15.2969 15.7768C14.8094 16.4855 15.1195 16.1324 15.2886 15.7941C13.944 17.1878 14.3447 16.9502 14.5805 16.7144C13.3138 17.4994 13.475 17.4266 13.6362 17.3445C13.0399 17.5953 13.1184 17.57 13.1809 17.5474C12.8562 17.6244 12.9265 17.6145 12.9618 17.6085C12.4761 17.5673 12.7129 17.607 12.7737 17.6144C12.2913 17.1039 12.2973 17.2097 12.3532 17.3215C12.2928 16.9526 12.2882 17.0042 12.29 17.0599C12.3249 16.7541 12.3073 16.8349 12.2976 16.9136C12.3668 16.5838 12.3527 16.6373 12.3399 16.6912C12.3811 16.5292 12.3792 16.5364 12.3772 16.5442C12.3896 16.4966 12.3869 16.5074 12.3829 16.5226C12.3955 16.4652 12.3933 16.4771 12.3915 16.489C13.4319 14.7911 12.6191 15.4591 12.3981 16.4534C14.0941 14.3057 14.0878 14.3101 14.0815 14.3147C14.3303 14.152 14.1722 14.2536 14.1005 14.3014C14.624 13.9723 14.5493 14.0173 14.4765 14.0621C14.7493 13.9023 14.7158 13.9206 14.6857 13.9375C14.8192 13.8688 14.7963 13.8795 14.7811 13.8869C14.8459 13.8586 14.8457 13.8587 14.8456 13.8588M14.2689 15.4833C14.0182 15.6942 13.8076 15.9073 13.6543 16.1334C13.7367 16.0767 13.8037 16.0242 13.8469 15.9809C14.0018 15.8261 14.16 15.6432 14.2689 15.4833ZM7.97015 26.7473C7.72427 26.8921 7.62284 27.0292 7.58412 27.1132C7.54643 27.1949 7.55921 27.241 7.56481 27.2548C7.56637 27.2587 7.5679 27.2616 7.56924 27.2638C7.57882 27.2607 7.59488 27.2533 7.61813 27.2358C7.62581 27.2301 7.63364 27.2245 7.64163 27.2192C7.92026 27.0334 8.02604 26.885 8.06131 26.8074C8.07394 26.7796 8.07738 26.7627 8.07797 26.7538C8.06786 26.7466 8.02346 26.718 7.97015 26.7473ZM8.07734 26.7462C8.07757 26.7461 8.07803 26.7475 8.07806 26.7507C8.07711 26.7479 8.0771 26.7463 8.07734 26.7462ZM7.55833 27.2655C7.55835 27.2653 7.55975 27.2651 7.56243 27.2655C7.55964 27.2659 7.5583 27.2658 7.55833 27.2655ZM7.57312 27.2688C7.57368 27.2691 7.57392 27.2694 7.57389 27.2694L7.57312 27.2688ZM8.22799 28.075C8.5983 27.8262 8.86506 27.5461 9.00571 27.2367C9.15368 26.9112 9.15208 26.5683 9.00052 26.2768C8.71653 25.7307 8.00304 25.5337 7.4538 25.8475L7.45378 25.8475L7.44883 25.8504C6.68062 26.3007 6.34783 27.0112 6.60279 27.643C6.72065 27.9351 6.96206 28.1707 7.27755 28.2626C7.59818 28.3561 7.93986 28.2859 8.22799 28.075Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.218 11.2644C22.2775 11.0332 22.5132 10.8941 22.7444 10.9536C28.6949 12.4856 32.3212 15.3499 34.5455 19.8545C36.7489 24.3171 37.5572 30.3554 37.9935 38.1875C38.0068 38.4259 37.8243 38.6299 37.586 38.6432C37.3476 38.6564 37.1436 38.474 37.1304 38.2356C36.6939 30.4005 35.8874 24.5248 33.7703 20.2373C31.6741 15.9919 28.2742 13.27 22.5288 11.7908C22.2977 11.7313 22.1585 11.4956 22.218 11.2644Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.6232 18.7566C22.8598 18.725 23.0772 18.8913 23.1087 19.1279C23.1624 19.53 23.0952 20.3304 22.917 21.1432C22.7384 21.9583 22.4266 22.8889 21.9268 23.5137C21.7777 23.7001 21.5056 23.7303 21.3192 23.5812C21.1328 23.4321 21.1026 23.1601 21.2517 22.9737C21.6247 22.5074 21.9021 21.736 22.0726 20.9582C22.2436 20.1781 22.2855 19.4947 22.2518 19.2422C22.2203 19.0055 22.3865 18.7881 22.6232 18.7566Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.646 28.5052C10.8484 28.6318 10.91 28.8984 10.7834 29.1009C10.3424 29.8066 9.78002 30.5703 9.1355 31.0165C8.93922 31.1523 8.66995 31.1034 8.53407 30.9071C8.39819 30.7108 8.44715 30.4416 8.64342 30.3057C9.13357 29.9664 9.61859 29.3335 10.0504 28.6427C10.1769 28.4403 10.4436 28.3787 10.646 28.5052Z"
        fill="white"
      />
    </IconPrimitive>
  );
}

IconHorseBlackSet2.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

IconHorseBlackSet2.defaultProps = {
  size: REFS.SIZES.M,
  display: REFS.DISPLAY.INLINE,
  color: REFS.COLORS.PRIMARY,
};

IconHorseBlackSet2.REFS = REFS;
