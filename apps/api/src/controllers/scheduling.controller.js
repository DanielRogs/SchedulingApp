import schedulingService from "../service/scheduling.service.js";

const createScheduling = async (req, res) => {
  try {
    const {
      juniorCompany,
      scheduleDate,
      scheduleStartTime,
      scheduleEndTime,
      reservedBy,
      observation,
    } = req.body;

    if (
      !juniorCompany ||
      !scheduleDate ||
      !scheduleStartTime ||
      !scheduleEndTime ||
      !reservedBy ||
      !observation ||
      !passwordToChange
    )
      return res
        .status(400)
        .json({ message: "Todos os campos são obrigatórios!" });

    const scheduling = await schedulingService.createSchedulingService(
      req.body
    );
    return res
      .status(201)
      .json({ message: "Agendamento confirmado com sucesso!", scheduling });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default {
  createScheduling,
};
