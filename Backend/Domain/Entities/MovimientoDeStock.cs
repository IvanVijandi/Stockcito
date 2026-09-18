using Domain.Common;
using Domain.Enums;
using Domain.ValueObjects;

namespace Domain.Entities;

/// <summary>
/// Represents a single stock movement (entry or exit).
/// Immutable once created: acts as an audit trail record.
/// </summary>
public sealed class StockMovement : AggregateRoot
{
    public StockMovementId Id { get; private set; }

    /// <summary>Reference to the product this movement belongs to (by ID, not navigation).</summary>
    public ProductId ProductId { get; private set; }

    public MovementType Type { get; private set; }
    public Quantity Units { get; private set; }

    /// <summary>Optional human-readable reason for the movement (e.g. "Purchase order", "Sale").</summary>
    public string? Reason { get; private set; }

    public DateTime OccurredAt { get; private set; }

#pragma warning disable CS8618 // EF Core requires a parameterless constructor; all properties are set via the static factory.
    private StockMovement() { }
#pragma warning restore CS8618

    public static StockMovement Record(ProductId productId, MovementType type, Quantity units, string? reason = null)
    {
        ArgumentNullException.ThrowIfNull(productId);
        ArgumentNullException.ThrowIfNull(units);

        return new StockMovement
        {
            Id = StockMovementId.New(),
            ProductId = productId,
            Type = type,
            Units = units,
            Reason = reason?.Trim(),
            OccurredAt = DateTime.UtcNow
        };
    }
    public static StockMovement Reconstituir(StockMovementId id, ProductId productId, MovementType type, Quantity units, string? reason, DateTime occurredAt)
    {
        return new StockMovement
        {
            Id = id,
            ProductId = productId,
            Type = type,
            Units = units,
            Reason = reason,
            OccurredAt = occurredAt
        };
    }
}
