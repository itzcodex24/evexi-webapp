import { EvexiMock, Evexi } from "evexi";

const configs = {
  Starbucks: {
    GOOGLE_API_KEY: process.env.REACT_APP_GOOGLE_API_KEY ?? "",
    GOOGLE_CALENDAR_ID: process.env.REACT_APP_GOOGLE_CALENDAR_ID ?? "",
    // OFFICE_API_KEY: process.env.REACT_APP_OFFICE_API_KEY ?? "",
    TEXT: `{
      "MEETING_ROOM_NAME": "Bunsik orders"
    }`,
    COLOURS: JSON.stringify({
      SCHEDULE_BACKGROUND_COLOR: "linear-gradient(to bottom, #0f2d4b,#0f2d4b)",
      PRIMARY_FONT_COLOR_SCHEDULE: "#0F2D4B",
      SECONDARY_FONT_COLOR_SCHEDULE: "#FAB44B",
      SCHEDULE_BACKGROUND_CONTAINER_COLOR:
        "linear-gradient(to bottom, #0F2D4B,#0F2D4B)",
      MUTED_FONT_COLOR_SCHEDULE: "#0F2D4B",
      BACKGROUND_MAIN: "#0F2D4B",
      PRIMARY_FONT_COLOR: "#FAB44B",
      SECONDARY_FONT_COLOR: "0F2D4B",
      MUTED_FONT_COLOR: "0F2D4B",
      PROGRESS_BACKGROUND_COLOR: "#0F2D4B",
      PROGRESS_FONT_COLOR: "#0F2D4B",
      BOOKING_FONT_COLOR: "#0F2D4B",
      BOOKING_MUTED_FONT_COLOR: "#0F2D4B",
      BOOKING_BACKGROUND_COLOR: "#0F2D4B",
    }),

    LOGO: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXQAAAFdCAYAAAATwJatAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzt3XmcHGWdP/DPt7qqJpkJNySgyCGgCAhiQjjFBEkmXd2ZcJiAoLKi4i3gsaC/1ZAVV1c8FhRdL8QDXRPMMenqniRoguCCISwqu3IIKsoVIAghM8l0Vdf398cMMNNVM13T08dM9ef9emVdnnqq6jtJz6erq596HlFVEBHR5Gc0uwAiIqoNBjoRUUIw0ImIEoKBTkSUEAx0IqKEYKATESUEA52IKCEY6ERECcFAJyJKCAY6EVFCMNCJiBKCgU5ElBAMdCKihGCgExElBAOdiCghGOhERAnBQCciSggGOhFRQjDQiYgSgoFORJQQDHQiooRgoBMRJQQDnYgoIRjoREQJwUAnIkoIBjoRUUIw0ImIEoKBTkSUEAx0IqKEYKATESUEA52IKCEY6ERECcFAJyJKCAY6EVFCMNCJiBKCgU5ElBAMdCKihGCgExElBAOdiCghGOhERAnBQCciSggGOhFRQjDQiYgSgoFORJQQDHQiooRgoBMRJQQDnYgoIRjoREQJwUAnIkoIBjoRUUIw0ImIEoKBTkSUEAx0IqKEYKATESUEA52IKCEY6ERECcFAJyJKCAY6EVFCMNCJiBKCgU5ElBAMdCKihGCgExElBAOdiCghGOhERAnBQCciSggGOhFRQjDQiYgSgoFORJQQDHQiooRgoBMRJQQDnYgoIRjoREQJwUAnIkoIBjoRUUIw0ImIEoKBTkSUEAx0IqKEYKATESWE2ewCKIHWd3b0B8aBhm/uIaK7N7ucaijwDwBQI9hpe9Y2dHU/Bag2uy6i0YjyNUrjJuK7mbeo6FsBnATgaCTvYsEH8JgCD4jqH1Vkc0n0tqnp/KPNLozoRQx0qt6KJSlv2o4PQOWjAI5odjlNofKQGsFqIzBWmRn3Dl7FUzMx0KkqRTd7jIh+H8DsZtcygTwoot8xd025EWev3NbsYqj1MNBpzLx85h0AvgfAbnYtE1Svin7L9qwvo2vN1mYXQ62DgU5j4uUz7wfwTQAySrcAwF8BPAqgKDLwBeOEF4io6J5DWiwA+wHYd/B/R/uZo/SJ6BfNqTuvwZyNu2pVJtFIGOgUW6kn7QSB0Q0gFbHZA7DCAH6WClK/Qra7r8Hl1deKJan+aTsOEeB4qMwU4C0AZiLe0N+/iOj7zXR+fZ2rpBbHQKd4uhfN8Ez/XgxcqZb7bwXebzvuvY0uq6lyXft6EiyCEbwdKqdj9HBXqFxvqXFF4t7saMJgoFMsXsG5ESoXhTao3GB19L4Pczb6TShrwugvOIcZgXEZRN8FoGOUrr8vGcFZUxYU/tqg0qiFMNCpoqKbfZ2I3ouyWy0i2m1uPvFsLF0aNKm0iafg7OcBn4HK+zFwDz7KMwKcazrurxtZGiUfA50q8grOdVD5SFnzditVOhKdPU9UPMAt8/bwPOvVUkrtAVGzBLQL0FafaquTSpV61Tf7VPSFQPSFwPR3Tt015Tl0rXmhmuP15xYeYaRK34HKnBG67DRUFqcyObf6qomGY6DT6JYtM7wTNm/FwEiPl4joJ8x0/isj7te9aDc/VXqfir4TwOvrXGU9PQfRP0PlAQB3iRHcZarchXS+v/KuIl7e+SCAawBMjejgqcr5dia3srYlU6tioNOovJ70CQiMzeXNVqq0Pzp7no3ax89n5kH0RlV5RQNKbDyVHWIEG1Sl2zL9FZi/rne07l7BOR4qvwBwaMTmflFJm5ncxvoUS62Esy3S6EqpEyJaN40U5kU3u1iBfGLDHABEp6nK2QB+4PnmY17BuW7X2q6osAYAWOn8PVZ/2wkA7ozY3Kaiq4s96WPrVi+1DAY6jc4IjixvUpWoYEJx3YKjRfTHSN7EXKPZAyofSaVK93v5zFex6px9InudvXKbZfpnKhA1Fn13CYyVWH32nhHbiGJrpV88qkZg7A0ZfltORB+P6iql1PWI/rLTB7BFBH+vfYG1EehLX9QaAPYVYB8d+N4g7pe3NoDLvbb+CyWfuch03J5Qj/nreu0VS87yOno3ADi1bOthvl38kQlZxAm+qFq8h06j8vOZVQqcNbRNVc4t/yLPy2dORPQthVtKwHumOO4j9ayzblads4/f1n+0ih4LlTcBmANgeoW9VIFr7LtmfypySOeqc/bx2vpvBxD69APg/ZbjfnvcdVNL4i0XGjvRUnnT4Fzo5e63eju6Jm2YA8DZK7eZjvtrK53/huW451l3zT5AgDdD9OsAto+wlwjwz/4Jm5dj09wpUccsGUEawNMR+16zK585uIY/AbUQBjrVhKicGGpU+RoWL9/ZhHLqZ+nSYDDgP2oV7YMF+AyA56K6KnCu19e+DrfM26N825QFhb8q8N6I3XYzga/XumxqDQx0qpVXlTeo6f+mGYU0zFmrnjMd92rLN48E8LMRep3u9bflkOtqL99gO+4aqNxQ3q7AQr/gnFHrcin5+KUo1Upo/hK7lBp5kYf1nR2eby4BMFsEAyNDFFN0yAM4AjwPQUOnFVBFr4puFZWtgehDbf1tt+GsVZFX4C/pWrPVAi7w8pnfALgW5bNRip5WlNIqu+B0lT+QZJVSl3mm/xYAw26zqMpXAHkjvyClsWCgU/0Eqch7zMV1C46WkpkDcAgwcmTpS/+nsUQHpj03VODZxRIKzu8lMFaaot+H4z450n6W415f6kn/JQiM5Sh7gxNgvgdcZwHvG7ZT15oX1M1eKaLlV/hv6C+ks21prK3NT0WtgLdcqH7s/vCCEN2LdpNSysVgmE8CKai8UUWv9oBHvILzs/585jUjdl5QyEtgzAMiFvVQuaRYcC4sb7Yz7s8B/La83VC5Ypy1U4thoFP9eFZoiTrP9C9G2e2FScSGyvkG8Ieim/181H1xADCza+8QI+gCUCzfJoHxn/1u9tXDW1UF+OeIQ53q9aSjntQlisRAp/pRI7SykQLzmlFKjbWJ6Kc9o/Q//bmFR0R1MBcUbofoh0MbRKelRK8J9R+YSjc8nW4p9a4a1EstgvfQqaFE9ADo8DsxqvI5AR5V0Reg0tSFMkR0mqjso6KHAjgNwDEY+cLntYYR3On3pJeYCwq/LN9opfPf9fKZNwD44NB2Bc7x85nTy+dDV9GvycDKR0MK0vOxae7HuCYpxcFAp8ZSCa9HmirdbC0o/KEJ1VTWvWiGb3nv1oEFK0JDMwHsrYHh+vnM/KgFK6z2viuKfe1nC3DA0HYF/g0DbxgvsXdMy3sdvc8C2HtI816l3o63pADOm04V8ZYL0Wi61mw10/l/s0SPGHyIKOpBqTYFVvX3pF8b2jJn4w5R+VTEPqcW3ewxw1oWLy8OTrM7TABkqqyeWgwDnSiOdL7fdNyrg8A4DsADET32NgJjDQpOaDIva8sJPwawpbxdRENPikqq9PPQkUWd6oqmVsNAJxqDtuzaP1kqJwO4NWLza/3A+ESodenSQEX/I6L/O7Bp7rDbnqbK7Qh/Cjh4Z8E5sNqaqXUw0InGKpP7h2UXFwG4v3yTin56V67roPJ2e8e0lQiPTd/L3zFt+LDEgSdJ7yjfPwWcNK6aqSUw0ImqceaG5wNgEYDy5efaDaP0gVD/xct3QnRFqD1VOrO8SVTCV/8qM6uulVoGA52oSm2O+6AMLAA9jAG8AyuWhMfgB0Zo3VAFQpNwBUYQGvFjCA4bT63UGhjoRONgBqlrALwwtE2BV/rtfXPL+5aM4PbQAVSODjfpfaE2KAOdKmKgE41HtrsPiJxA65Tyhqnp/KMAtpY171e+lmjblF0Po3zaAJWy6QKIwhjoROOkovlQo+ixI3R/tLzBs4uHD2uYs9EX0WfKuu2J9Z2hKYqJhmKgE42TlFL/W96mQOQcLyL6WHmboTIjtL9KeHm6XVOmVVkitQgGOtE4+Xbx2YjmyN8tVQnNEV8CQg8jAQgtDtLf1r/b2KujVsJAJxon8c2o36P4Ky2JhgJdgdAkZUYpxSt0GhUDnWicUqJ7hxojrsRf3BLRNzTEUaJ+N4MUf19pVHyBEI2TofLK8jYVjVyHVIDQbZNUdN9QyAemV/4QE9EwDHSicVLRo8rbROXvkX2B/UJtKlH34PcsbwhUGOg0KgY60TgFKnNCjaKheV4Gha7mPcsLhb8C+5e3TQ0MBjqNioFONB6rz95TgDeH2kU3h9oKzu4Ir6faN3X++uFj05ctMyR8Jb8TGTfyNg7RixjoROPg28WLAQxbLFpEH7d2TLsr1DcwTgYgZc33ATrsi9L+mVsOQ/lqYip/Lu9HVI6BTlQtN7sXRD9e3qwq/4XFy0vl7YHonIij/Ka8QVKl40Jtog9VWya1DgY6UZU80etU5RVlzYGq/CDcW0SAJeWtOrCgRbk3RPRjoFNFDHSiKhQLztUA3h6x6QY7kwtNBeC7mZMBlE+w5dnALeV9ReVN5W0K/LbaWql1mJW7ENFLViyZ6k3b8R+icknE1u3WwELSISr6vlCbygZkcsNXMbpl3h6AfXJ5V7uU+nXVNVPLYKA3WH9u4RGGEdwGYJXluOGVbWjC8t1sp3bo16DyuojNgQIXw3GfLN/Qn8+8xgAujNjnx+UNxf62t4ioVdZ8P7rWlE+7OzGtWGJ7Hb23AUhZvR1vwuLl5eujUh3xlkuDGaKfBDADwPuKbjYqGGgi2TR3WjGfOdcrOBtVtAdA5L+ZAP9iO+4vorYZwL+i7MlPAR61938y1N8A3hY6gMovq6q9CYodvW8FMBvATK+97x3NrqfV8Aq9kboX7QZTzx/8LxHRDwP4UDNLmhxE+nPZw1Oi5WO4a6FPgX4AECOYFqjMENHpgwtKnAa0Hy+ACS0fbfgSFeAK03FDS9EBQLHgnCWQ80IbRP8DM7d4w9rWd05XMbtCXYGfjfFnahpR+QBEX/yPSwH5LodbNg4DvYE8y7sIKkPn8vgnrFvwGXT2RD36TQAAET/v3GwYwTn1TgVVGRgkPnJ4l9uuwPstx40O3O5FM8SU70Rs+Zs5def15Y2+b74bgF3W/Ccz494Rt6BmKhaco0Tk1CFNR/l550zTwYamFdVieMulkVTKvxhr933z4qbUMkn4eedMBc5pdh0RbikBx9ojhfmmudM80+9G1NwtwKcwZ+OuYY3di3ZT4GPlfQX40WS5whWVD6HswakAuLRJ5bQkBnqD+PnM6QCOKW9X0Q9j01x+UhpB1JwmTXaXqCywHHfeFMd9JLLHiiW219e+EgP3kocRYLXtuD8tb/dTpcsB7FvWvKvomzfUoui62zR3GiKGcQrg9PekX9uEiloSA71BVHSkES0HF/vaFzW0mEnEF90IoNkjJf4MlW9A9I2W4842M7l1I/Zcdc4+3rQd6wDMK9+kwBOm6YeGL+7KZw5W4JOhY6n+Z3vXmsfHWXtDeH3tFwLYPWKTGANX7tQAvDJshPWd06HmiLcNBPgogMgREq1uajr/qJ9b+BY1gg8DmF7v8wmwQ4HtAvw5EL1fgS1t6fzDcfb1cguPg603Q+XwiM07JTDOwvx1T5VvMIBvQbR8NaJeq2R9sZqfoUneP+IWlX/CLfM+gzM3PN/AeloSA70B/FLqPQh/2TXU6V4+M8ty3C2NqmkyMbNr7wAwcb8YzHW1F1P+Z8WQjwEoH0MOAL6KvtPOrg3NwOgVnA8IJF3erirXTpax576bPQUSnq5giN28on2xBXytYUW1KN5yqbdlywxVeW/FfgNDGGky2TTX9Nzsuz2j9EdRuQLRYd6voovtdP7m8g1+wTkDKtdG7HOf3dd+dc3rrZNRbicO9VGsWBJahYlqi4FeZ6UTNjsADqnYUeV85DMT7QtAirAzt/CVfj7zKa+v/QGIfg/hOc4HiG4TI8jY6fzq8k3FXNeRqnIzwm8CPozgoknzhOWqc/YB8NYYPQ8pdvRm611Oq+MtlzorqXxAJNaoszZf5RJz4KlCmkgKTptfSp0cpEpnisqZpoFZGrHmZ5m7SiqLp6TzoZEwO9d3vso0zB4Ae5VvU5Uv2AsKobnUJyq/rf9iAFPi9JWBIYxr6ltRa2Og19GuXNdBKUM74/ZX0Q+h4Pw70vn+etY1Ka0+e0+/rX92EBh71PtUYgR7QmUagMMBHAPILBhBu8R74GiniF5t7pj2ZWvx8mJo6/rO6aZvbkDEVb0C6+2O3kn0hi6icCrfTnzZXC+38Dgru/b3dSupxTHQaynXtW9Rgv1TqdJBQSl1QMrQ81D5Sm6o6UWVm5HP/E5Ut8HAs0ZgbFOVZ0tGsK2tv20bzl65rV7lT1TFdQuOFju1ESr7xfy0Mz7xnxQdKhDBL0qBXNnmuH+O6rBzfeerTN/sARA1LvsB2y4uwZyNfjUnb4hNc6cVd+x2oCHBASp6IOCcBOCIMR3DCH5YzGfWGcAzKrpNVbYZKs8GRrDN9qxteOVjz4amRKDYGOhxuNm9fJUjAyOYLsCBKjpdAuMAEd1fgRkCvEKB6TBgC4AgMIAqg0eALIAsRAAFAlFAFAYAr60fyGcUwLYX/4joM6qyDSp3Wplc1GPmk56UUp9AxBOXE0QRois1MD5vObn/HekXquhmX2eKuQ7AqyI2/yMwgkVNG9a3ae4Ub+fU1xmB8YoA2F+M4BUaGNNF9AAF9ofKDIi+AmhvF6OEcb6lHifAcQoAg1MtqChEBZ7pA1tnAPnMdgy8vp9WYJsAz6jKX201vohsd9+4f94EY6BXUFy34GiR1P9A1H7xuk1UANGXXtgNfi5bMPBE4b7AwPwjg0W9a+f6zsLU+etCK8hPdgLsNQGffb9HgJ+Zpv/DqLHlQxXzmSUi+C6iH7wBgEvbFhQeqH2JMdw9y/L6ZtwP4OBg8CJEy17f1V6cjMPug38Ofel3ThRFBA/awE8aXcxkwkCvQD2rKEYQWh9yAvpREsMcAFR0JVSa+jStAI/qwPqft5WA3IiP/Q/VvWg3z/S/JKM9dDPgG0U3e0/USkd198JuiuY/iRvHH2zPyjW7iImOgV5BW3btn7yB8cKrMTCP+UR0nXXX7MvhNLuM+rDS+R8V3WxRRNMimFqLYwaKPaRs2K6KlgzIdlVsV5WtAjwmRnC/aQT3obPniZfqqXh0kWLeeZth6TUIrzkaZXcRXY1V55zY8O9I5mz0rXxmrgd0AzihoeeO71eWXTwHjssnTStgoMdgpfN37lrbdXLKCNZC9Ohm1zNEAJXLrEzu60kN8xfZmdx/AfivZtdRiZ/PnK5wPifA6Tryl6tPI/ydwGHFKbtuspctc7B0aVDfKss47pNWrmuOL8EPVTTOmPLGUbnJ6mu/GI4bHjFEIXywKKYpC7v/YpVSJyvgNruWQf0qeoGVyX292YWQSKngpD03e5sCtwI4fcSewC8su3gEgDtD21Q6/Vl3habQbYhsd5+ZcZcosKwp5492nbXlhHciavgnRWKgj0XXmhfs3o5FUPlGkyv5h6jMs9P5nze5jpa2a23Xob6b/ayXd/4UqOQhetoo3f8B0YtMx30rztzwfClInQcg9GWqin7eKzjH16/q0ajajnsVgHcBaGaIlgB82HLcSxv+aWWSY6CP1eLlJSuT+8jgYhXNGDP8Vw1Sp5iZ3G1NOHdrW7bM8HILZw+EeOaOVKr0sIouA3DYqPuJbrJSpaOtdP5HLzZNyXb/TYDFCL+GbKh8t5lz5FuOe6OInoGBW0ON1q/ABZbjhlZ0osp4D71KVib3nf6C84QRGD+NmPq0Xu6xUqUMHPeJyl0TZtkyo/+EzYcbw5fwqzsFXg3R4yH6RpmNWVDZZ8yD+FRehVQpNH7adNxfF/OZzwuwtGzTTH/n1EtN4CtVFz5OZjr/m/585jQDyGGsDw9VS3SbAIusdP43DTlfAjHQx6EtnV9bzGdOkYEX/UF1Pt0tlui56OzZXufzTDi7cl0HpU4obTCA1zR6TPRLX2tW9/Toiw7zPfu7JrCkfIPd3ne119feCeCkoe2q8hkUnB8hnW/GVTIAoM1xH8S6BSd5pdTNAObW+XR/0ZLpWNnu++t8nkTjLZdxsh33XitVOglA/SZUEv2hNWOrg3S+5cIcAFISXAngNc2uowJPgJUCpBHxhacqFnsFJzzN7JyNvgKXIHzrZQ8vMD5bn1LHoLPnWau3YwGAG+t4lj/4gfEmm2E+bgz0WujsecIKUnMA3FKHo//UShfe1crzW6ho1OPyE4FC9A4Al1mp0sGm455rOm6P55vnimh46TiVr+zKdYU+ydmOe2/kvOiil+wsOAfWpfKxWLy8aDnuuxT4Qh2O/qDV3nfq1Ozax+pw7JbDQK+VbHefqtR+VR1Rb7Ks+l4vAmxodg0jeKrkmxdajnvt0AeP2rvWPA7R8zAwWmOoqSmjFBmKlmddDeAfZc22qXJ5bUuuniFajwuWNszZuKMOx21JDPQaEtGTKvcaI5URxzS3Cqu343oRvQLArwHcXZc/Kv8H4M8A/jikfYsAaweHqUZNqzAjZQTroxYmMRcUblfgmoh93uYVnPDr5KxVz4nol0PtKpeg4Iw0B0xjBcbJdTjqwbvymegFQmjM+KVorSxbZuAEzK7DkQ/dles6aEq2+291OPbksHh5yQS+hIE/TVHMdV1vGKUNCgy/BSJ6uAf83Fqx5AwsXj7sitwOUp/zU/47dfjj/wKVrwA4tfwcpmd93TP9KzB0Ei/RaV5gnG8BTZ9JMxA9eVxfDY8gNfAg1o/rcOiWwyv0GimesPloAHVZfMFI+W+qx3EpPjvbfb9n+qcMXsmXO73Y0XtVqDXb3afRX2ye4vWkw/OmdK15AcAPQu2i7xpzwTUnIsCJdTp4y38KrRUGeo2ISj0+jg4cmy/4CWHq/HV/t9SYA+Av5dsEuLKYz7y+vN3qa78RQHgWxcB4X9Q5NEj9Z0TzSVFfpjZSf945AoNTNtcBX981wkCvFdG6BTpU3ly3Y9PYZLufUWARgBfKtpgChEeqLF5eUpXPRxzp/Kh744ND9+4pb0+l/EyVFdeEUccLFgCv6eteFGdWSqqAgV479XzBvxbrFhxQx+PTGNiOey9EL4vYNNd3s6E1ZO2O3tUAnitr7vCA86KOL8Dy8jZVae58mvW8YAFgWh5vK9YAA70W1i3YG/EffFGo3DQ4pjf2clpF3xxt4idqMCtd+AFUbi9vV9FPhDrP2bgLQGgitcHlBkM0SK2P6HsSIPX4TjKusYzg+q2ofFKAR+PuIBzNVRMM9BooqZyEIU+Jj0jlIQE6rUzu7bbjftoPjNcg5rf7k/I+umcmePy8KozgoxEbziy62WPKGyUwfhg+gsyNmoTLunvm7xAek75vfyH96qrLHY/uRbsBCP1MEZ4DcJnV23Gqmcl92QxSrx2cjndXjH0n3+t7AmKg10Cp8vjcoor+u2UEx5iO+9JDMlOzax+zHPedEhhzEfXF2VCik+8F396X4EAHrHT+HgC/Cm0wgsXlTWY2dyeAZ8qadyvumnJUaP+lSwONmEpCSqljqy52HHy7OBtAarQ+CuR80ddbjnvtS8M3s919tuNeFYgeowPzHY3maOS66vWla8tgoNeAjP5xdEOQKh1tp/NXIp3vj+pgZtdusmZsfaMAHwcw0nwtx2DVOfuMu9hG8pN8hT5AgevK20QlYtUfVRENTXksgfHGqOMKcF95m2EEh1ZX5TiVUqO9vv8kKvNsx104NZ2PvMXSls4/bDvuQgNYCJWHRjiOFKG8jz5ODPTxWrbMAMIPFCnwJEQvshx3fltnz0gv4pfN3OKZjvtVq7/t1RgIifKJ/Y1iW//kuo/uWYkPdLu3owCgt6z5qF096UNCnQPjd+VNOvJc6qGJqlQ0fMwGCIBTIpo9Ff13q73vWDOTizUlQMpxc9b+Tx4F4DKERwlBjICBPk4M9HEafKBo6PCzAMA37aL9uqELGsR29sptluNeKoFxGgYeP3/JpLuPPm1H4gMdi5cXFQhdeRulVOjKOxANhbQAkY+9q0poNSOoNGGRchExguEPFKn8MgCOsdP5Kwe/8I1v5hbPctxrfdM/GuWjeUQ5PHecGOjj97oh//89CIyTLcf9EM5aVT5MbUzM7No7rLtmzx5cGWng3qvo5Bqr2wJX6ABgRNxKgWhoGTkjMKJCOvLf1DCC0OtHVRq1kMrLurumQ+XFW31bVfTtViZ3ZpvjPjiew06dv+7vluOeJypnYPD7I1Xh0NxxYqCPky26ESo3QeVDVnvfbCu7dnPNDr50aWBlct+xUqXXQvTdpZJ5Rc2O3QgtEugaGKGpXyViGKuGR64Aoh2RxyyZoUCXxq2M9bKu7qeg8hUFrrFUXmen8zfV8vBmJrfRau87XkXPl8A4q5bHbkWcnGu80vmnLeDtdT1HZ8+zFnCDVdeT1MHu21si0A0jeCooW9FIgKnl/Uoq2yOGikQHugTF0DhYlSZcgKlaGYTH1tfSnI2+HTFOn8aOV+hUP0W7JQJdNbwuXgC0lbdJqhT1nhz5/IJEXbmLju1+NbUcBjrVT7GtNQI9ekWl8lFKECOYEuolGhrtAUQHusZ7QIdaGAOd6mfnlNYI9MA4pLxNVEILYhi+Gb7qVolcrScYPnJq4JjhB5OIhmGgU/3s93RLBLoYwdyI5tCY8yBVemVEv8iHcYzAOLy8TUW57iaNioFO9fP0fs2cTKoh+nvSr8XAXD7DqBrhKQGAN5Q3iMrDUcdV0SMj+sae7IpaEwOd6mfqrsQHuqFyFcJfbN45OK/5MKLylvK2wAgeGOHQUYEetVoS0UsY6FQ/dn+iA93PZ+ZB5fzQBpXwMnIDUyyHlp3zPeu/Q30LThuA8idN1TSC31dbK7UGBjrVjx0eSp0U/W721Qr8JGLTI1Zfe2hKZC8wsiifsVDlofauNY+X9/VLqZMRHsf+ENL5kSZuIwLAQKd62r57IgO9f92Cww3RAoDp5dtU9BNYvHxnaCeVS0Jtouuijh+InhGx/6YqSqUWw0Cn+rG8qEAPjaUWlVHn2p5Iim72HKOU2ozoR/tdO52/ObRPT/o4HIh8AAAbgElEQVRYAKeWt4vKT6POIaKh5eZUNNaMhtTa+Og/1U9EoAvwWPixSuM0RCyMPJF4uYWzIfpvIhr6YnPQfbZdvDBqg6FyVcT4zYfNjHtHeWN/PvMaA5hZfnq7v+2XY62ZWg8Dnepnx7SoK/QtAM4Z1iK6rFhwnrU9qxtdayKfnGy49Z3Tfd98YyA6R1QWwkB4ZaFBIvp4yQi6cOaG58u3+QXnzapydngn/Q9AQzkvwDvK2xS4BWev3FbFT0EthoFO9RNxhV5S+bkhejWG3+7bS1R+4pk+kM80rr4Bz2P4Y/q7ATBf/NUQrfA1gMr/+UHKmZLu/ltoW66rXcW4HmVTvSjwhD115/dC/TfNnSJof295swA/q/hTEIH30KmeTD+Uhm2Z3J8BfKsJ1YxkDwB7Dfkzlouc5ZZnnTYlGxHmALyU/02IHl3eLqKfi1oYwutrfzeA8kUsnrNMf+UYaqIWxkCnWglNRoW+9sjLW8s3P4WBWy+T1Z9EZYHluOeNtJCJl89cDpWLIjb9xtp84rdDrXfPsgB8MtSu8n3MX1e+xB1RJAY61Uox1NLRGz16pWvNC5ZvnhFjJfiJRAFs0MA4x2rvO8rM5CKHHAKDYQ58JWLTThW9BEuXht78vCf3fy/Cy9GVSoFx/biqppbCe+hUK6GryKJvzrCB8LJrANC15gUbWOjnM/NU9EKonAzgEAB2fcuMxRNgqwKPQvQPqnKr75uboh4CGmbFklSxve9fRfDpiK2qwHvsdP6PoS3rO6dDzKvDe8gNUxZ2/6XaH4JaDwOdakJEH1SVI8vaTgNw72j7mY67AcCGWCdZscRGe1/kCj810dYfRI1UASq/y+zMLXylOa30E1GZE7VdVb5gZ3KR484937wGA/fvh+rzSqmrJt0qVdRUDHSqiQC4V4CuYY0ql2DZsm9H3WKoyuLlRUTd2mmmFUtsv6P3UtPAZ6Cy2wi9rrMz7r9EbSgVnDQg4aGKol+r+ImAqAzvoVM1QhcCEhirIvq9wT9h88cbUE/jrVhiewXnYq+j948KfAkDwx1DVPTLlpO/LGrMeX9u4RGByk0om61RgMfsgWMSjQmv0GlUqtJbPo5aVPYs72dlcnd7+cxdKJtRUIEveK7jWZnCtVGhNqlsmjulf+fUeYbKOehAF1T2HqV3P0Q/aKfzN0Ru7V60m2EGqxG+1aIA3sWJuKgaDHQanWhoWJ6IhialAgAxgo9pYPwaw684UxD5mpd3zlNkrisFxq+nZnOPT/hw3zR3St/23fe2U6XDVHSWAKcq2ucbI1yJl7kfRvBOa0HhrhGOPc0z21cDkU+ffn3wewWiMWOgUyV/imibFdXRXFC43XOzX4Vo1G2WkwQ4yTQCeHkHQMOfCB2jdlimjxffdWK++3gq+lV76s6roh4cAgCsPntPz253AZwS2qbyf1Zf+5XV1UvEe+hUgQRGaFGFADgFy5ZFvnasvvYrRLCi/pVNKAGAnwap0lF2On/lSGG+c33nqzy7+CtEhLmIPl5KlbKRU+8SxcRAp1GZ03bcCWBYyAiwf+nEOxdE7rB4ecncPPt8Ff0yYl/YTlrbAVyvKsdYjnthW2fPQyN17HezXWYpdQ+A4yM2P6+llDNlQeGv9SqUWoPoBL+VSc3n5zO/0LIZEhVYbztu56j7FZxTVeWrAGbXtcBGUtkhhhYCxSrbN3MVZ4fcNHea19f+eQAfQXjtUQDYJYGRNrNrN9WhWmoxDHSqqL/gLDRUusvbVfR8O53/eaX9vXzmRAXOEeDNGHgadDqiw22iCAA8B5VnIfoYgD8D+B2A/7ba+36HORv9yocQ8QrpdwjwBVV5xQidnhaVs8xMLryuKFEVGOhU2bJlhjfrrj9EzBz4TAmYNcVxH2lKXRPRsmVGcfZvu0Tl04hYFHqIBwLRTFs6/3CjSqPkY6BTLMV8ZpEAqyM2PeAHxlumZtc+1vCiJpJb5u3h9bedB9HLARw5WlcFeuxU6UJ09jzboOqoRTDQKTa/4KyMWn1HgMeg8jYzk7utGXU1Tfei3Yqp0jwDeJuKZgFMqbDHdgAft5z89yf8OHyalBjoFN+6BXt7pdQWAIdGbA0A/KBkBFcndrRG96LdfCOYCdFTVXQ+gJMBxJo/S4DVnul/dOr8dX+vb5HUyhjoNCbFdQuOllJqI4D9RugSAPgVVF2BcXdJ5ck2u/j4pFik4e5Z1s4nDphupkrTDWD/ANhPVA5S4CioHAvRIwFEz/E+sl+Lyqf4xSc1AgOdxqzYkz7WCIy8Aq9sdi1jprIDot6QFhtArafkDRQoGKLXmen8+hofm2hEDHSqzroFB3il1M8wMBSRMLD4s6j8NDCCb3H0CjUDA52qNzCc8f0QXQZg32aX0yR/g0q3iK4w75p9e83mfieqAgOdxq/g7O4D71WV9wE4otnl1JFC5WGI3g7g1lIpdSuXiKOJhIFONVXsSR9rqMxTldkYWPR4v8E/caadrYUAQPkych2It1ZpvwDPKPAMBtZCfVqBR6DyRwHusyzv/knx5S61LAY6EVFCcLZFIqKEYKATESUEA52IKCEY6ERECcFAJyJKCAY6EVFCMNCJiBKCgU5ElBAMdCKihGCgExElBAOdiCghGOhERAnBQCciSggGOhFRQjDQiYgSgoFORJQQDHQiooRgoBMRJQQDnYgoIcxmF0CUeCuWTC129B5uiO4dAHtBpR0qnmEEzweB8bjd0fsQ5mzc1ewyafLjItHV2DR3itfXfoyKHiLA7giMUd8YVfSFFPCCAtvNVOl/0dnzbL1K8/OZBQDeo8BrAChE/yiB8U0zk7utpudxs50A3qOir33pPCrfMh3312M+2LoFexcD41JReROANgCPaGCssO+etQZLlwa1rHtXPnNwSvTjUDkJwG4AHoXoSmv6U9/DzC1erc7j5TMnAngbgJMBHA/AGqV7AOCPAH4pgfFzM7v2jlrU0J/PvMYALgdwAoB2Ff2bqPzc6u34ERYvL43taCLFQvpcqFwkKodC1APwO4heZ6Xz94ynTt/NnqLAP0H0EAAPK/BN23HvHc8xWxUDfSw2zZ1S3Dn1c6JyCYDdx3GkvwO4PRD9WduOaeuweHmxFuX5+czHFPhKxKYAKhdbmdwPa3Eez3Uug8jXIjYpRN9jpfM3xD7YqnP28ezinRA9PHw0+aVlBG9DOv/0OMp9STGfeb0AtwLYK3QqwLXvmt013jeQYsG5UFQ+AeAN4zjMFgmMj44n2AffUH4JoCO0UeUmK5N7+1iOVyw41wz+XKFTGSpnpzI5d8xFrlgy1evovQ7Ae8qPCdGPWen8N8Z8zBbHQB8D382uUNG31vKYAjwaAFfYTv5nQPX/GLvymYNTwIMA7BG6vGCpHIxM7h/VngMAdhacA02VhzBwJR2mssMy/YPjfgrx3OyXIfrxUbr8wepvOwNnr9xWRbnDz5XP3Arg9JG2q+jb7XT+pmqOvasnfYgRGN8WYH7VBQ4XAHif5bjfq2ZnL5/5PYBjR9puGEEmtaCQj3UsNzsToncBkKjtIvq4Of2pQ8b0Cafg7O6prMXI/x4+AuNUK7t2c+xjEr8UjavYkz621mEOAAocKMBNvptZjoITHZIxmMC5GDnMAWA3TzRb7fFfOo/KuRgpzAFAdJpXSnXFPqBopb7HenZx9Xj+boCBNyIAbxq1U2BcUM2xvXzmDanA2FzDMAcGfjf/08stPG6sOxbXLTgao4Q5AASlVOyfVY3gfIwQ5gCgKq/wt86YE7vAW+bt4alswChvrgBMGEFV/x6tjIEekwTGnHoeX0Xf6qusAGTEX5xR9wfi/OKP5zbAi2p4HhEAr6rcTU/zVG6o9u8GAOzAOA6jhBIAGKJjD8+e9LEYuLWxX5WljSalRnDhmPcKjDh//7FfC6JSu3/zW+bt4RXt9QBmxzl1rGPSSxjoMalo5eAZ7zmAhV4hXX4/Me6+cQJl32qOPebzqMQ7z6qz9wYwJeapLygW0lfF7BsSxPjZY/4dvuzuWZYExo8A7F1tXZWIyrQq9qn89y86ltdCxb5x/n7HGOYwRHvi9KOXMdBjEpWpDTmRyr9UcyUqKqPdbnlR3PAcTcXziGis8/SlSmO6jSIqn/HymXeMZZ8h4pzLxrJlsX8n/K0zLkO8TyxVUyNYP9Z9RDTOzzqW10LF40ml440xzBUopNIFBvoYcRx6fHFC9jkRbHj5P9VUlQMBHIb4V3EH+bnsSWYWNRm6ljAC4Pu+m33UzOQ2NrkUUTjvi99d7xBgdQA8AhVfgFdC5TiIngLgyBH2+qadLqypSbnNNMYwB3Cv3d/2jvEMEmhVDPTaesRMu0tCrcuWGf2zf5tJqXxLgVdWOogawdEAA30Elore3J/PnNzmuA82qwivkD4RA2/UlfgKnG+n878Yscf6zunFon2qIXpYAOwlon9HYNxhZdf+vmYFN8tYw1z0f6xUKQ3HHfeoplbEQG+EpUuDNmBt0c0+JKL3oMJHWBE9oEGVTVZ7G0ABBeekWo1Rr8LxMfv91HbckcMcAOave8oGVo2/pAlmIMzXIf6V+a2W5S3CmRuer2dZScZ76A1kZ3L3qcovK3ZUqdkTiwn2ak/lF+MdzlgtDYwD4/QT0QfqXcuE9HKYnxinuwBrrd6ONMN8fBjoDSaiz1TqE6g83IhaEuBNnsoPxzOcsVoiGmv0SaBycr1rmXDGGOYAfmS2952Dxct31rOsVsBAb6QVS1IYmNtjNJ5tebc2opyEOM93M59p9ElF5alY/YBsMZ/5EnJd7fWuaUIYe5hfZzn5f8KcjX49y2oVDPSGESlO2/FFAEdU6HgT5q+LFRY0QEWvGsdwxqoEwH1x+wrwSS/l/83LZ77ru9kzcfes0SbqmrzGFuYqKldajnspR7PUDr8Ura12z83OHNogwL4DMxI67xBg1qh7qzxkFe2oCZBaXYDRLz4EwHf9nvRfzAWF2xtRkN3Ru97ra9+FuOO5VfbBwOyU7/G2ztguBeeXGhg9lumvRWfPE3UtthFExxLmJYh+wHTc79a7rFbDK/TaOgKiW4b+0YGn3a5FpTAXvcMrpd5ci0mokkaBzwHordCtTVVW9+cWVvoEVBtzNu5Q4OtV7r27qpwN0W97pdSjXj5zq+dmP4iCM54ZPJtL5Z2IF+a7VPStVjrPMK8DBnrzPQLgXdbmE09r71rzeLOLmYhU9G4DOB/A6HN4q+xjGEEBua5xT3EQh+2bn8PAPObjYQA4HaLXeyp/91zna8hn9q9BeY1W+YtplR0CdNnp/OoG1NOSGOjNdxCAy4onbP7sJP1FboiU4+YE+FSMrod5RmllQ4Yzdq15wUqVzsT4Q/1Fu0PkMg94wHeznxj8Ej05jOBDpuNuqNyRqsVAbz4BcJwASz3gkWLB+SJWLGnMvDGTjOm41wD4Zoyub/KAb9e7HgBAZ88TVm/HLKh8AwP3+mthdxW9xuvoLWDVOfvU6JjNp3KtV3BOanYZScZAn1hsUbnC6+i9A+sW8GnRCFZvx0cVyFXsqHKR72b/XwNKAhYv32llch9RlWMA/BRArR4Mm+e19W+c1PfWh9sTKrf4BeeMZheSVAz0iek4r5S6Bes7w8uHjYOojPvfW5r9mlm8vGT75gUA/lCpq4p+rlhwxj6feJXsTO4+y3EvtEz/QACXAdiM8V+1v76o8tPxV1d3cX/ODlXp9t3smXWtpkUx0GtJZQeAW8r+/AbAAwCeG+PRjvI864uxe0vlsbxBzKcbK9itYg+V+o4r7lrzQgnoArC1Qk8Rle/5bvaUutZTbv66pyzHvdZy3BMt33wFRN8twC8AbK/mcAJkSm42U+Mqa+0HiDOtxYAOFXWLBeesulbUgjgOvZZEH7Ycd96I23Nd+3opv2tgznMcGuN47+3rXvSFOKNfBNhZKUUF2LPiOSureAwV7avBeUY1xXEf8dxsBqK3Imoh5CFd1Qi6VeWGpix/07VmqwXcAOAG3D3L8p844FQVvQCibwcQ+7uSALg8BYx9IebG6bXU6PKktBrAyL8DL7NFZXmx4Fxgp/M317u4VsEr9EbKdj9jpfM3WEX7jYg3MqLNMv1Y63Mq8EKMbq8Z17wnAyNHKr8RqVR1JTpWViZ3twIXodLHfZV9BBhtIerGmLnFM7NrN1mZ3CVWkDpIgS8h7q0K0dMn/L30bHefJbpQRLtj7mGJyn95+cw/1bOsVsJAb4azVj2noktj9o51u0AHxrNXsnf/us44c3hH8kqp4xBnxaJ4tdSE7bi/ENE4wxkn1ms92/2M7bhXALg85h6WFxiNeWhqPNL5fnPHtMUCxB1rngJwg1dwPlzPslrFxHqRt5DAN++O2TXW2HRRiTVNayowwgtwxGUE58XpVjKChk4Za6bzX4LKtxp5zlqxejuuVyDWo/+GEUyvdz01sXh50Zyxdcng9wZxCFSu8/KZuG9uNAIGepMYdjHu7HuxHi4JUqU74/RTlUuqmvnPze4F0YvinKINiFVLLVn7P3kpgMn30Mri5SUBHorTVQNjR73LqZmZWzyzt+M8AD+OuYcA+KrvZj9bx6oSj4HeJEYpdXasjiqxrt7aFvQ8COCvMboe7BmlL8Q69xAe8PXBCaZGJ3pPU1YRmrnFs0TfCuDehp97XEQAHBKnp58q/b2+tdTY4uUlq7fjXQBujLuLii4rFpz4o7toGI5yaYJSwUkr5NNx+qroX+IdVVWRWSHAJ2N0/mix4Oy0N5/4aSxdOvqXcnfPsrynpn8DIrHGc0tgLI/Try7S+e2lnnRXKjDuBDCjEacsutljRPR4UTlIgScFeNDs6L0LczbuirO/52YuhuirYnTdPmW/px8bZ7mNt3h5yYJc7OWdPgAfjLOLqFzh5TPTLCf/EU6tOzYM9HpbscRGe19HMVV6lZRSx6voeQJZgDiTGQGQwFgb91SBEXwzFRiXI8a/q6hc4Z2wOaMF54v2rik9oVke85n9PZUMsP+VED08Zgm9ZtH+Xtx662HKgsJfvXwmC+BWAPVbVGJ9Z4fvmz8RwVnAy0PvFYDX196nBec2Q2UTRG8zgS1I5/uH7V9wdi8GxidE9MpY5xNdhZlbJunShKqWIx/28o4B4P0xd/qQ52bUyuAj9awsaRjotXWcl88Mv6IYHCEtgQGIxkvxF6k8ZGVzd8XtPmVB4a+em/0BRN8bc5djROUnXlt/gHzmMQDbMHAPYF8FXgHRsZWrcu1EmP7XctwtxYJzkaj8HHW6rej55rUARnowpl1UOhXohAo8oB/5zMMAHheV51R0BtQ4Pu4ydgAgonHvRU9QqpYjH/TyThHAR2PtIvrhYj6zzXbcq+paWoLwHvoEZohePtaPnJYan0blJyhDpwLwKgBvAHCcAq9EzE8QQ/zZtrx/G8sO7W39sX42s4onT+10/mYB6jOXy7JlBoALxrBHG4CjAJypA/f534SxhDmwxlxQiPsUZtwndZtwK0PVctxLVfTLcfcQ4LOc+yU+Bnp8/ZW71NSNKcetPAlVuWz3M6LyNtRugqg4+iD6VsxfV2kRiuFSpVhPlKrK2I47yHTcLwL4/hh2CbD0qspBl12bQuN+d/5R9M1Y955fpEDFv1epvGDIUBX76sC0F7HY6fwnVSXum7+oyufjHrvVMdBjEtEnG3YylZus3o73VLu7mcltVNF3oNKCELXRLyrnWOn8PWPe88xbtiPGE64llUerKQwArBlbPxB3jhEFnor1iWjmFk8EcZ+GHI9nAcwf68InKlrxy1MFYv+dClDxeHH6DGVncv9PgKtidj+RU0rHw0CPSVVubcBptgO4zOprvwiLl48rjO10/ucCpDEQCnUhoo9LYMw1M7l11R1BVYE7KnTa2nb3rIerOz4GhjN61lsRY6oFAWIPCzShH0KMGR/H4REAb7Ecd8tYd7SN4Leo/Gb+37EPKFrp3wgQjX+8QabjLou5aMnz+OPRjf6EPCkx0GOyHPe3olKXSYQUeBIqX/F883WW41473jB/kem4G6xU6ZjBumt5zzQAcKNpBK83s2sr/7KPbtQFKwT4VsWhlZWcteo5zzfnQWXUB3hUdH3sY6bzT1vtfadiYCENf1z1DVcC8DWrve8Yy3F/V9UROnueEMHKUXp4GqS+E/dwphH8GKN/kvpNtbWajvtFiH4Eo8xpo6LXjfs10CJEOcwzvk1zTa+v/X0QvRAqx2L0Wf5GslOAbQHwO4j+j6Fyh9nedwvmbKxlKIR4PekTEBgfx8DIjGqXZ+sFsEJTpS/bnT3/V6vaim7284PD94ZdYAiw0hS9IDTkr1r5zP5F4IcCzI/Y+oBVtE/CWavGOs0xim72dWIEHwBwQayHr6I9o6I3ain1nbbs2j9VeYyX5br29YxSHsAJZVt2AfiA5bg3juVw/QVnoaFyE8LTJz9QKqXSUxZ2x3xeIlqp4KRLAzNiDp3qwgdwndXb8c+1ushJOgb6eLjZvWD6U/p9s+L9vTYjeAE7pj2PxcuLjShtRG52r6IRzBfgDKi8EcDhGGlKXNFtUPkTgLs1MH5pB8Yt6FoTZ1bHMSsWnKOMwHAC0f0M4AUYwSZzQeH22p9JxHcz81V0MYBDFeg3gNtMu/hNnLnh+XEd+u5Zlv/k/ifACOYgMI7XgfH7hwLYo6znc1B5RkTvg8pvkSrdaarcXrM3rhetWJIqtfctKBnBbKhMEeBvvul3T52/rronTtd3TvdKqUWqcjiAIkR/b++Y1l2z1/SKJVOL7X3nwgiONFR2BEFqtZ3tvr8mx24RDHQCVixJYdqOvYslcx81SkFbkHoWd898lh9za6jg7I7ASCHjPsenH6leGOhERAnBL0WJiBKCgU5ElBAMdCKihGCgExElBAOdiCghGOhERAnBQCciSggGOhFRQjDQiYgSgoFORJQQDHQiooRgoBMRJQQDnYgoIRjoREQJwUAnIkoIBjoRUUIw0ImIEoKBTkSUEAx0IqKEYKATESUEA52IKCEY6ERECcFAJyJKCAY6EVFCMNCJiBKCgU5ElBAMdCKihGCgExElBAOdiCghGOhERAnBQCciSggGOhFRQjDQiYgSgoFORJQQDHQiooRgoBMRJQQDnYgoIRjoREQJwUAnIkoIBjoRUUIw0ImIEoKBTkSUEAx0IqKEYKATESUEA52IKCEY6ERECcFAJyJKCAY6EVFCMNCJiBKCgU5ElBAMdCKihGCgExElBAOdiCghGOhERAnBQCciSggGOhFRQjDQiYgSgoFORJQQDHQiooRgoBMRJQQDnYgoIRjoREQJwUAnIkoIBjoRUUIw0ImIEoKBTkSUEAx0IqKEYKATESUEA52IKCEY6ERECcFAJyJKCAY6EVFCMNCJiBKCgU5ElBAMdCKihGCgExElBAOdiCghGOhERAnBQCciSggGOhFRQjDQiYgS4v8DYWL5dIzrfPIAAAAASUVORK5CYII=",
  },
};

export function initEvexi(name: keyof typeof configs) {
  new EvexiMock(Evexi).all().env(configs[name]);
}
